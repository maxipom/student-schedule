const StudentModel = require('../model/student.model');
const DataSource = require('../services/data-source.service');
const constants = require('./shared/xml-constants-definition');

class StudentService {
    constructor() {
        this.studentSource = DataSource.getStudentSource();
    }

    getStudentByName(name) {
        const studentFromXml = this.studentSource.find((student) => {
            return student[constants.TREE_DEF_ATTRIBUTES][constants.STUDENT_NAME] === name;
        });
        return this.getStudentFromXml(studentFromXml);
    }

    getStudentFromXml(studentFromXml) {
        return new StudentModel(
            studentFromXml[constants.TREE_DEF_ATTRIBUTES][constants.STUDENT_ID],
            studentFromXml[constants.TREE_DEF_ATTRIBUTES][constants.STUDENT_NAME],
            studentFromXml[constants.TREE_DEF_ATTRIBUTES][constants.STUDENT_CLASS_ID],
            studentFromXml[constants.TREE_DEF_ATTRIBUTES][constants.STUDENT_EMAIL],
            studentFromXml[constants.TREE_DEF_ATTRIBUTES][constants.STUDENT_MOBILE],
        );
    }
}

module.exports = StudentService;
