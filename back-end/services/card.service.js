const LessonService = require('../services/lesson.service');
const ClassroomService = require('../services/classroom.service');
const CardModel = require('../model/card.model');
const DataSource = require('../services/data-source.service');
const constants = require('./shared/xml-constants-definition');

class CardService {
    constructor() {
        this.cardsSource = DataSource.getCardsSource();
    }

    getCardsByLessons(lessons) {
        const cardsArray = [];
        this.cardsSource.forEach(
            (card) => {
                lessons.forEach((lesson) => {
                    if (card[constants.TREE_DEF_ATTRIBUTES][constants.CARD_LESSON_ID] === lesson.id) {
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
                    const classrooms = cards[constants.TREE_DEF_ATTRIBUTES][constants.CARD_CLASSROOM_IDS].split(',');
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
            CardService.getClassrooms(card[constants.TREE_DEF_ATTRIBUTES][constants.CARD_CLASSROOM_IDS]),
            card[constants.TREE_DEF_ATTRIBUTES][constants.CARD_DAYS],
            lesson || CardService.getSimpleLesson(card[constants.TREE_DEF_ATTRIBUTES][constants.CARD_LESSON_ID]),
            card[constants.TREE_DEF_ATTRIBUTES][constants.CARD_PERIOD],
            card[constants.TREE_DEF_ATTRIBUTES][constants.CARD_TERMS],
            card[constants.TREE_DEF_ATTRIBUTES][constants.CARD_WEEKS],
        );
    }

    static getCardFromXml(card, lesson) {
        return new CardModel(
            CardService.getClassrooms(card[constants.TREE_DEF_ATTRIBUTES][constants.CARD_CLASSROOM_IDS]),
            card[constants.TREE_DEF_ATTRIBUTES][constants.CARD_DAYS],
            lesson || CardService.getLesson(card[constants.TREE_DEF_ATTRIBUTES][constants.CARD_LESSON_ID]),
            card[constants.TREE_DEF_ATTRIBUTES][constants.CARD_PERIOD],
            card[constants.TREE_DEF_ATTRIBUTES][constants.CARD_TERMS],
            card[constants.TREE_DEF_ATTRIBUTES][constants.CARD_WEEKS],
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
