const LessonService = require('../services/lesson.service');
const ClassroomService = require('../services/classroom.service');
const CardModel = require('../model/card.model');
const DataSource = require('../services/data-source.service');

class CardService {
    constructor() {
        this.cardsSource = DataSource.getCardsSource();
    }

    getCardsByLessonsId(lessons) {
        const cardsArray = [];
        this.cardsSource.forEach(
            (card) => {
                lessons.forEach((lesson) => {
                    if (card['_attributes']['lessonid'] === lesson.id) {
                        const simpleCardFromXML = this._getSimpleCardFromXML(card, lesson);
                        cardsArray.push(simpleCardFromXML);
                    }
                });
            }
        );
        return cardsArray;
    }

    getCardsByClassroomId(classroomId) {
        const xmlCards = this.cardsSource.filter(
            (cards) => {
                const classrooms = cards['_attributes']['classroomids'].split(',');
                return classrooms.indexOf(classroomId) >= 0;
            }
        );
        const cardsArray = [];
        xmlCards.forEach(
            (xmlCard) => {
                cardsArray.push(this._getCardFromXml(xmlCard));
            }
        );
        return cardsArray;
    }

    _getSimpleCardFromXML(card, lesson) {
        return new CardModel(
            this._getClassrooms(card['_attributes']['classroomids']),
            card['_attributes']['days'],
            lesson || this._getSimpleLesson(card['_attributes']['lessonid']),
            card['_attributes']['period'],
            card['_attributes']['terms'],
            card['_attributes']['weeks'],
        );
    }

    _getCardFromXml(card, lesson) {
        return new CardModel(
            this._getClassrooms(card['_attributes']['classroomids']),
            card['_attributes']['days'],
            lesson || this._getLesson(card['_attributes']['lessonid']),
            card['_attributes']['period'],
            card['_attributes']['terms'],
            card['_attributes']['weeks'],
        );
    }

    _getClassrooms(classroomsIdString) {
        const classroomsIds = classroomsIdString.split(',');
        const classroomServices = new ClassroomService();
        return classroomServices.getClassroomsByIds(classroomsIds);
    }

    _getSimpleLesson(id) {
        return LessonService.getSimpleLessonById(id);
    }

    _getLesson(id) {
        const lessonService = new LessonService();
        return lessonService.getLessonById(id);
    }
}

module.exports = CardService;
