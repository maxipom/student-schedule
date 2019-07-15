const StudentModel = require('../model/student.model');
const DataSource = require('../services/data-source.service');

class StudentService {
    constructor() {
        this.studentSource = DataSource.getStudentSource();
    }
    getStudentByName(name) {
        const studentFromXml = this.studentSource.find((student) => {
            return student['_attributes']['name'] === name;
        });
        return this.getStudentFromXml(studentFromXml);
    }

    getStudentFromXml(studentFromXml) {
        return new StudentModel(
            studentFromXml['_attributes']['id'],
            studentFromXml['_attributes']['name'],
            studentFromXml['_attributes']['classid'],
            studentFromXml['_attributes']['email'],
            studentFromXml['_attributes']['mobile'],
        );
    }
}

module.exports = StudentService;
