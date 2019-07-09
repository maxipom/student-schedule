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

    _getSimpleCardFromXML(card, lesson) {
        return new CardModel(
            this._getClassrooms(card['_attributes']['classroomids']),
            card['_attributes']['days'],
            lesson || this._getSimpleLesson(card['_attributes']['teacherids']),
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
        const lessonService = new LessonService(null);
        return LessonService.getSimpleLessonById(id);
    }
}

module.exports = CardService;
