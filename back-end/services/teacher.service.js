const TeacherModel = require('../model/teacher.model');
const DataSource = require('../services/data-source.service');

class TeacherService {
    constructor() {
        this.teachersSource = DataSource.getTeachersSource();
    }


    getTeacherById(id) {
        const teacherFromXML = this.teachersSource.find((teacher) => {
            return teacher['_attributes']['id'] === id;
        });
        return TeacherService._getTeacherModelFromXml(teacherFromXML);
    }

    static _getTeacherModelFromXml(xmlTeacher) {
        return new TeacherModel(
            xmlTeacher['_attributes']['id'],
            xmlTeacher['_attributes']['gender'],
            xmlTeacher['_attributes']['firstname'],
            xmlTeacher['_attributes']['lastname'],
            xmlTeacher['_attributes']['name'],
            xmlTeacher['_attributes']['short'],
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
