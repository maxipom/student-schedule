const TeacherModel = require('../model/teacher.model');
const DataSource = require('../services/data-source.service');
const constants = require('./shared/xml-constants-definition');

class TeacherService {
    constructor() {
        this.teachersSource = DataSource.getTeachersSource();
    }


    getTeacherById(id) {
        const teacherFromXML = this.teachersSource.find((teacher) => {
            return teacher[constants.TREE_DEF_ATTRIBUTES][constants.TEACHER_ID] === id;
        });
        return TeacherService._getTeacherModelFromXml(teacherFromXML);
    }

    static _getTeacherModelFromXml(xmlTeacher) {
        return new TeacherModel(
            xmlTeacher[constants.TREE_DEF_ATTRIBUTES][constants.TEACHER_ID],
            xmlTeacher[constants.TREE_DEF_ATTRIBUTES][constants.TEACHER_GENDER],
            xmlTeacher[constants.TREE_DEF_ATTRIBUTES][constants.TEACHER_FIRST_NAME],
            xmlTeacher[constants.TREE_DEF_ATTRIBUTES][constants.TEACHER_LAST_NAME],
            xmlTeacher[constants.TREE_DEF_ATTRIBUTES][constants.TEACHER_NAME],
            xmlTeacher[constants.TREE_DEF_ATTRIBUTES][constants.TEACHER_SHORT],
        );
    }

    getTeachersByIds(teachersIds) {
        return teachersIds.map((id) => {
            return this.getTeacherById(id);
        });
    }

    getAllTeachers() {
        return this.teachersSource.map((xmlTeacher) => {
            return TeacherService._getTeacherModelFromXml(xmlTeacher);
        });
    }
}

module.exports = TeacherService;
