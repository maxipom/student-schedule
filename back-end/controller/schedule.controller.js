const LessonService = require('../services/lesson.service');
const TeacherService = require('../services/teacher.service');
const CardService = require('../services/card.service');
const PeriodService = require('../services/period.service');

class ScheduleController {
    constructor() {
        this.lessonService = new LessonService();
        this.teacherService = new TeacherService();
        this.cardService = new CardService();
        this.periodService = new PeriodService();
    }

    getCardsByTeacherId(id) {
        const teacher = this.teacherService.getTeacherById(id);
        const lessons = this.lessonService.getLessonsByTeacher(teacher);
        return this.cardService.getCardsByLessonsId(lessons);
    }

    getTeachers() {
        return this.teacherService.getAllTeachers();
    }

    getPeriods() {
        return this.periodService.getAllPeriods();
    }
}

module.exports = ScheduleController;
