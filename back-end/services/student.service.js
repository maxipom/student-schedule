const StudentModel = require('../model/student.model');
const DataSource = require('../services/data-source.service');

class StudentService {
    constructor() {
        this.studentSource = DataSource.getStudentSource();
    }

}

module.exports = StudentService;
