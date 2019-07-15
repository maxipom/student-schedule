const TeacherModel = require('../model/teacher.model');
const DataSource = require('../services/data-source.service');

class TeacherService {
    constructor() {
        this.teachersSource = DataSource.getTeachersSource();
    }


    getSimpleTeacherById(id) {
        return new TeacherModel(id, null, null, null);
    }

    getSimpleTeachersByIds(teachersIds) {
        let teacherArray = [];
        teachersIds.forEach((id) => {
            teacherArray.push(this.getSimpleTeacherById(id));
        });
        return teacherArray;
    }

    getTeacherById(id) {
        const teacherFromXML = this.teachersSource.find((teacher) => {
            return teacher['_attributes']['id'] === id;
        });
        return new TeacherModel(
            teacherFromXML['_attributes']['id'],
            teacherFromXML['_attributes']['gender'],
            teacherFromXML['_attributes']['firstname'],
            teacherFromXML['_attributes']['lastname'],
            teacherFromXML['_attributes']['name'],
            teacherFromXML['_attributes']['short'],
        );
    }
    getTeachersByIds(teachersIds) {
        let teachersArray = [];
        teachersIds.forEach((id) => {
            const newTeacher = this.getTeacherById(id);
            teachersArray.push(newTeacher);
        });
        return teachersArray;
    }
    getAllTeachers() {
        const teachers = [];
        this.teachersSource.forEach((xmlTeacher) => {
            teachers.push(this.getTeacherById(xmlTeacher['_attributes']['id']))
        });
        return teachers;
    }
}

module.exports = TeacherService;
