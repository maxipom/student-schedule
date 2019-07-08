const StudentModel = require('../model/student.model');

class StudentService {
    constructor(studentsSource) {
        this.studentsSource = studentsSource;
    }

    getStudentByName(studentName) {
        const student = this.studentsSource.find((student) => {
            return (student['_attributes']['name'] === studentName)
        });
        return new StudentModel(student['_attributes']['id'], student['_attributes']['name'], student['_attributes']['classid']);
    }

}

module.exports = StudentService;
