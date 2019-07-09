const LessonService = require('../services/lesson.service');
const TeacherService = require('../services/teacher.service');
const CardService = require('../services/card.service');

class ScheduleController {
    constructor() {
        this.lessonService = new LessonService();
        this.teacherService = new TeacherService();
        this.cardService = new CardService();
    }

    showTeacherCardsById(teacherId) {
        const teacher = this.teacherService.getTeacherById(teacherId);
        const lessons = this.lessonService.getLessonsByTeacher(teacher);
        const cards = this.cardService.getCardsByLessonsId(lessons);

        cards.forEach(
            (card) => {
                console.log('--------------------------------');
                console.log('PROFESOR: ' + card.lesson.teachers.map(element => element.short).join(' / '));
                console.log('SUBJECT: ' + card.lesson.subject.short);
                console.log('CLASSROOM: ' + card.classrooms.map(element => element.short).join(' / '));
                console.log('PERIOD: ' + card.period);
                console.log('DAY: ' + card.day);
                console.log('--------------------------------');
            }
        ); // TODO: This is gonna change once the front-end is implemented


    }
}

module.exports = ScheduleController;
