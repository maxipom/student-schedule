const LessonService = require('../services/lesson.service');
const TeacherService = require('../services/teacher.service');
const CardService = require('../services/card.service');
const PeriodService = require('../services/period.service');
const DayDefService = require('../services/day-def.service');
const StudentService = require('../services/student.service');


class ScheduleController {
    constructor() {
        this.lessonService = new LessonService();
        this.teacherService = new TeacherService();
        this.cardService = new CardService();
        this.periodService = new PeriodService();
        this.dayDefService = new DayDefService();
        this.studentService = new StudentService();
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
    getCardsByStudentId(id){
        const student = this.studentService.getStudentByName(id);
        const lessons = this.lessonService.getLessonByStudent(student);
        return this.cardService.getCardsByLessonsId(lessons);
    }
}

module.exports = ScheduleController;
