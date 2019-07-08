const LessonModule = require('../model/lesson.model');
const ClassroomService = require('../services/classroom.service');
const ClassService = require('../services/class.service');
const DayDefService = require('../services/day-def.service');
const SubjectService = require('../services/subject.service');
const TeacherService = require('../services/teacher.service');

class LessonService {
    constructor(lessonsSource) {
        this.lessonsSource = lessonsSource;
    }

    getLessonsByClassId(studentClassId) {
        const lessons = this.lessonsSource.filter((lesson) => {
            return this._isStudentClassIdInLesson(lesson, studentClassId);
        });
        //(id,classes,dayDef,classrooms,periodsPerCard,periodsPerWeek,seminarGroup,subject,teachers,student)
        let lessonArray = [];
        lessons.forEach((lesson) => {
            lessonArray.push( this._getLessonFromXML(lesson));
        });
        return lessonArray;
    }

    _getLessonFromXML(lesson) {
        return new LessonModule(
            lesson['_attributes']['id'],
            this._getClasses(lesson['_attributes']['classids']),
            this._getDayDef(lesson['_attributes']['daydef']),
            this._getClassrooms(lesson['_attributes']['classroomids']),
            lesson['_attributes']['periodspercard'],
            lesson['_attributes']['periodsperweek'],
            lesson['_attributes']['seminargroup'],
            this._getSubject(lesson['_attributes']['subjectid']),
            this._getTeachers(lesson['_attributes']['teacherids']),
            null,
        );
    }

    _getClasses(classesIdString) {
        const classesIds = classesIdString.split(',');
        const classService = new ClassService(null);
        return classService.getSimpleClassesByIds(classesIds);
    }

    _getTeachers(teachersIdString) {
        const teachersId = teachersIdString.split(',');
        const teacherService = new TeacherService(null);
        return teacherService.getSimpleTeachersByIds(teachersId);
    }

    _getClassrooms(classroomsIdString) {
        const classroomsIds = classroomsIdString.split(',');
        const classroomServices = new ClassroomService(null);
        return classroomServices.getSimpleClassroomsByIds(classroomsIds);
    }

    _getDayDef(deyDefId) {
        const dayDefService = new DayDefService(null);
        return dayDefService.getSimpleDayDefById(deyDefId);
    }

    _getSubject(subjectId) {
        const subjectService = new SubjectService(null);
        return subjectService.getSimpleSubjectById(subjectId);
    }


    _isStudentClassIdInLesson(lesson, studentClassId) {
        const classesIds = lesson['_attributes']['classids'].split(',');
        return classesIds.indexOf(studentClassId) >= 0;
    }
}

module.exports = LessonService;
