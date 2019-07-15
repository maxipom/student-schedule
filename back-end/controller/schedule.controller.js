const LessonService = require('../services/lesson.service');
const TeacherService = require('../services/teacher.service');
const CardService = require('../services/card.service');
const PeriodService = require('../services/period.service');
const DayDefService = require('../services/day-def.service');

class ScheduleController {
    constructor() {
        this.lessonService = new LessonService();
        this.teacherService = new TeacherService();
        this.cardService = new CardService();
        this.periodService = new PeriodService();
        this.dayDefService = new DayDefService();
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

    getDaysDefs() {
        return this.dayDefService.getAllDaysDefs();
    }
}

module.exports = ScheduleController;
