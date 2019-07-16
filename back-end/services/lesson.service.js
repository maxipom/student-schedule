const LessonModel = require('../model/lesson.model');
const ClassroomService = require('../services/classroom.service');
const ClassService = require('../services/class.service');
const DayDefService = require('../services/day-def.service');
const SubjectService = require('../services/subject.service');
const TeacherService = require('../services/teacher.service');
const DataSource = require('../services/data-source.service');

class LessonService {
    constructor() {
        this.lessonsSource = DataSource.getLessonsSource();
    }

    getLessonsByTeacher(teacher) {
        const lessons = [];
        this.lessonsSource.forEach((xmlLesson) => {
            if (this._isTeacherIdInLesson(xmlLesson, teacher.id)) {
                const lesson = this._getSimpleLessonFromXML(xmlLesson, [teacher]);
                lessons.push(lesson);
            }
        });
        return lessons;
    }

    getLessonById(id) {
        const xmlLesson = this.lessonsSource.find((xmlLesson) => {
            return (xmlLesson['_attributes']['id'] === id)
        });
        return this._getSimpleLessonFromXML(xmlLesson);
    }

    getLessonByStudent(student) {
        const lessons = [];
        this.lessonsSource.forEach((xmlLesson) => {
            if (this._isStudentIdInLesson(xmlLesson, student.id)) {
                const lesson = this._getSimpleLessonFromXML(xmlLesson);
                lessons.push(lesson);
            }
        });
        return lessons;
    }

    static getSimpleLessonById(id) {
        return new LessonModel(id, null, null, null);
    }

    _getSimpleLessonFromXML(lesson, teachers) {
        return new LessonModel(
            lesson['_attributes']['id'],
            this._getClasses(lesson['_attributes']['classids']),
            this._getSimpleDayDef(lesson['_attributes']['daydef']),
            this._getSimpleClassrooms(lesson['_attributes']['classroomids']),
            lesson['_attributes']['periodspercard'],
            lesson['_attributes']['periodsperweek'],
            lesson['_attributes']['seminargroup'],
            this._getSimpleSubject(lesson['_attributes']['subjectid']),
            teachers || this._getTeachers(lesson['_attributes']['teacherids']),
            null,
        );
    }

    _getClasses(classesIdString) {
        const classesIds = classesIdString.split(',');
        const classService = new ClassService();
        return classService.getClassesByIds(classesIds);
    }

    _getTeachers(teachersIdString) {
        const teachersIds = teachersIdString.split(',');
        const teacherService = new TeacherService();
        return teacherService.getTeachersByIds(teachersIds);
    }

    _getSimpleTeachers(teachersIdString) {
        const teachersId = teachersIdString.split(',');
        const teacherService = new TeacherService(null);
        return teacherService.getSimpleTeachersByIds(teachersId);
    }

    _getSimpleClassrooms(classroomsIdString) {
        const classroomsIds = classroomsIdString.split(',');
        const classroomServices = new ClassroomService(null);
        return classroomServices.getClassroomsByIds(classroomsIds);
    }

    _getSimpleDayDef(deyDefId) {
        const dayDefService = new DayDefService(null);
        return dayDefService.getSimpleDayDefById(deyDefId);
    }

    _getSimpleSubject(subjectId) {
        const subjectService = new SubjectService(null);
        return subjectService.getSimpleSubjectById(subjectId);
    }

    _isTeacherIdInLesson(lesson, teacherId) {
        const teachersId = lesson['_attributes']['teacherids'].split(',');
        return teachersId.indexOf(teacherId) >= 0;
    }

    _isStudentIdInLesson(xmlLesson, studentId) {
        const lesson = DataSource.getStudentSubject().find(
            (studentSubject) => {
                return studentSubject['_attributes']['studentid'] === studentId &&
                    studentSubject['_attributes']['subjectid'] === xmlLesson['_attributes']['subjectid'] &&
                    studentSubject['_attributes']['seminargroup'] === xmlLesson['_attributes']['seminargroup'];
            }
        )
        return lesson !== null && lesson !== undefined;
    }

}

module.exports = LessonService;
