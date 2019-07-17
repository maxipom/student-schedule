const LessonService = require('../services/lesson.service');
const TeacherService = require('../services/teacher.service');
const CardService = require('../services/card.service');
const PeriodService = require('../services/period.service');
const DayDefService = require('../services/day-def.service');
const StudentService = require('../services/student.service');
const ClassroomService = require('../services/classroom.service');
const CLassService = require('../services/class.service');


class ScheduleController {
    constructor() {
        this.lessonService = new LessonService();
        this.teacherService = new TeacherService();
        this.cardService = new CardService();
        this.periodService = new PeriodService();
        this.dayDefService = new DayDefService();
        this.studentService = new StudentService();
        this.classroomService = new ClassroomService();
        this.classService = new CLassService();
    }

    getCardsByTeacherId(id) {
        const teacher = this.teacherService.getTeacherById(id);
        const lessons = this.lessonService.getLessonsByTeacher(teacher);
        return this.cardService.getCardsByLessons(lessons);
    }


    getTeachers() {
        return this.teacherService.getAllTeachers();
    }
    getClassrooms() {
        return this.classroomService.getAllClassrooms();
    }
    getClasses(){
        return this.classService.getAllClasses();
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
        return this.cardService.getCardsByLessons(lessons);
    }
    getCardsByClassroomId(id){
        return this.cardService.getCardsByClassroomId(id);
    }
    getCardsByClassId(classId){
        const classModel = this.classService.getClassById(classId);
        const lessons = this.lessonService.getLessonByClass(classModel);
        return this.cardService.getCardsByLessons(lessons);
    }
}

module.exports = ScheduleController;
