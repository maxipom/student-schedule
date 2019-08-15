const LessonModel = require('../model/lesson.model');
const ClassroomService = require('../services/classroom.service');
const ClassService = require('../services/class.service');
const DayDefService = require('../services/day-def.service');
const SubjectService = require('../services/subject.service');
const TeacherService = require('../services/teacher.service');
const DataSource = require('../services/data-source.service');
const constants = require('./shared/xml-constants-definition');

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
            return (xmlLesson[constants.TREE_DEF_ATTRIBUTES][constants.LESSON_ID] === id)
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
            lesson[constants.TREE_DEF_ATTRIBUTES][constants.LESSON_ID],
            LessonService.getClasses(lesson[constants.TREE_DEF_ATTRIBUTES][constants.LESSON_CLASS_IDS]),
            LessonService.getSimpleDayDef(lesson[constants.TREE_DEF_ATTRIBUTES][constants.LESSON_DAY_DEF]),
            LessonService.getSimpleClassrooms(lesson[constants.TREE_DEF_ATTRIBUTES][constants.LESSON_CLASSROOM_IDS]),
            lesson[constants.TREE_DEF_ATTRIBUTES][constants.LESSON_PERIODS_PER_CARD],
            lesson[constants.TREE_DEF_ATTRIBUTES][constants.LESSON_PERIODS_PER_WEEK],
            lesson[constants.TREE_DEF_ATTRIBUTES][constants.LESSON_SEMINAR_GROUP],
            LessonService.getSimpleSubject(lesson[constants.TREE_DEF_ATTRIBUTES][constants.LESSON_SUBJECT_ID]),
            teachers || LessonService.getTeachers(lesson[constants.TREE_DEF_ATTRIBUTES][constants.LESSON_TEACHER_IDS]),
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
        const teachersId = lesson[constants.TREE_DEF_ATTRIBUTES][constants.LESSON_TEACHER_IDS].split(',');
        return teachersId.indexOf(teacherId) >= 0;
    }

    _isStudentIdInLesson(xmlLesson, studentId) {
        const lesson = DataSource.getStudentSubject().find(
            (studentSubject) => {
                return studentSubject[constants.TREE_DEF_ATTRIBUTES][constants.STUDENTSUBJECT_STUDENT_ID] === studentId &&
                    studentSubject[constants.TREE_DEF_ATTRIBUTES][constants.STUDENTSUBJECT_SUBJECT_ID] === xmlLesson[constants.TREE_DEF_ATTRIBUTES][constants.LESSON_SUBJECT_ID] &&
                    studentSubject[constants.TREE_DEF_ATTRIBUTES][constants.STUDENTSUBJECT_SEMINAR_GROUP] === xmlLesson[constants.TREE_DEF_ATTRIBUTES][constants.LESSON_SEMINAR_GROUP];
            }
        );
        return lesson !== null && lesson !== undefined;
    }

    static isClassIdInLesson(xmlLesson, classId, maxAmountOfClasses) {
        const classIds = xmlLesson[constants.TREE_DEF_ATTRIBUTES][constants.LESSON_CLASS_IDS].split(',');
        return classIds.indexOf(classId) >= 0 && classIds.length <= maxAmountOfClasses;
    }

}

module.exports = LessonService;
