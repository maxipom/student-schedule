const TeacherModel = require('../model/teacher.model');

class TeacherService {
    constructor(teachersSource) {
        this.teachersSource = teachersSource;
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
}

module.exports = TeacherService;
