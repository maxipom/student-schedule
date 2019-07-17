const LessonService = require('../services/lesson.service');
const ClassroomService = require('../services/classroom.service');
const CardModel = require('../model/card.model');
const DataSource = require('../services/data-source.service');

class CardService {
    constructor() {
        this.cardsSource = DataSource.getCardsSource();
    }

    getCardsByLessons(lessons) {
        const cardsArray = [];
        this.cardsSource.forEach(
            (card) => {
                lessons.forEach((lesson) => {
                    if (card['_attributes']['lessonid'] === lesson.id) {
                        const simpleCardFromXML = CardService.getSimpleCardFromXML(card, lesson);
                        cardsArray.push(simpleCardFromXML);
                    }
                });
            }
        );
        return cardsArray;
    }

    getCardsByClassroomId(classroomId) {
        return this.cardsSource
            .filter(
                (cards) => {
                    const classrooms = cards['_attributes']['classroomids'].split(',');
                    return classrooms.indexOf(classroomId) >= 0;
                }
            ).map(
                (xmlCard) => {
                    return CardService.getCardFromXml(xmlCard);
                }
            );
    }

    static getSimpleCardFromXML(card, lesson) {
        return new CardModel(
            CardService.getClassrooms(card['_attributes']['classroomids']),
            card['_attributes']['days'],
            lesson || CardService.getSimpleLesson(card['_attributes']['lessonid']),
            card['_attributes']['period'],
            card['_attributes']['terms'],
            card['_attributes']['weeks'],
        );
    }

    static getCardFromXml(card, lesson) {
        return new CardModel(
            CardService.getClassrooms(card['_attributes']['classroomids']),
            card['_attributes']['days'],
            lesson || CardService.getLesson(card['_attributes']['lessonid']),
            card['_attributes']['period'],
            card['_attributes']['terms'],
            card['_attributes']['weeks'],
        );
    }

    static getClassrooms(classroomsIdString) {
        const classroomsIds = classroomsIdString.split(',');
        const classroomServices = new ClassroomService();
        return classroomServices.getClassroomsByIds(classroomsIds);
    }

    static getSimpleLesson(id) {
        return LessonService.getSimpleLessonById(id);
    }

    static getLesson(id) {
        const lessonService = new LessonService();
        return lessonService.getLessonById(id);
    }
}

module.exports = CardService;
