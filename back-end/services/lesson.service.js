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
        return this.lessonsSource
            .filter((xmlLesson) => {
                return LessonService.isTeacherIdInLesson(xmlLesson, teacher.id)
            })
            .map((xmlLesson) => {
                return LessonService.getSimpleLessonFromXML(xmlLesson, [teacher])
            });
    }

    getLessonById(id) {
        const xmlLesson = this.lessonsSource.find((xmlLesson) => {
            return (xmlLesson['_attributes']['id'] === id)
        });
        return LessonService.getSimpleLessonFromXML(xmlLesson);
    }

    getLessonByStudent(student) {
        return this.lessonsSource
            .filter((xmlLesson) => {
                return this._isStudentIdInLesson(xmlLesson, student.id)
            })
            .map((xmlLesson) => {
                return LessonService.getSimpleLessonFromXML(xmlLesson);
            });
    }

    getLessonByClass(classModel) {
        const classService = new ClassService();
        const maxAmountOfClasses = classService.getAllClasses().length;
        return this.lessonsSource
            .filter((xmlLesson) => {
                return LessonService.isClassIdInLesson(xmlLesson, classModel.id, maxAmountOfClasses);
            })
            .map((xmlLesson) => {
                return LessonService.getSimpleLessonFromXML(xmlLesson);
            });
    }

    static getSimpleLessonById(id) {
        return new LessonModel(id, null, null, null);
    }

    static getSimpleLessonFromXML(lesson, teachers) {
        return new LessonModel(
            lesson['_attributes']['id'],
            LessonService.getClasses(lesson['_attributes']['classids']),
            LessonService.getSimpleDayDef(lesson['_attributes']['daydef']),
            LessonService.getSimpleClassrooms(lesson['_attributes']['classroomids']),
            lesson['_attributes']['periodspercard'],
            lesson['_attributes']['periodsperweek'],
            lesson['_attributes']['seminargroup'],
            LessonService.getSimpleSubject(lesson['_attributes']['subjectid']),
            teachers || LessonService.getTeachers(lesson['_attributes']['teacherids']),
            null,
        );
    }

    static getClasses(classesIdString) {
        const classesIds = classesIdString.split(',');
        const classService = new ClassService();
        return classService.getClassesByIds(classesIds);
    }

    static getTeachers(teachersIdString) {
        const teachersIds = teachersIdString.split(',');
        const teacherService = new TeacherService();
        return teacherService.getTeachersByIds(teachersIds);
    }


    static getSimpleClassrooms(classroomsIdString) {
        const classroomsIds = classroomsIdString.split(',');
        const classroomServices = new ClassroomService(null);
        return classroomServices.getClassroomsByIds(classroomsIds);
    }

    static getSimpleDayDef(deyDefId) {
        return DayDefService.getSimpleDayDefById(deyDefId);
    }

    static getSimpleSubject(subjectId) {
        const subjectService = new SubjectService(null);
        return subjectService.getSimpleSubjectById(subjectId);
    }

    static isTeacherIdInLesson(lesson, teacherId) {
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
        );
        return lesson !== null && lesson !== undefined;
    }

    static isClassIdInLesson(xmlLesson, classId, maxAmountOfClasses) {
        const classIds = xmlLesson['_attributes']['classids'].split(',');
        return classIds.indexOf(classId) >= 0 && classIds.length <= maxAmountOfClasses;
    }

}

module.exports = LessonService;
