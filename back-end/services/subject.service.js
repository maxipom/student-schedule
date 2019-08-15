const SubjectModel = require('../model/subject.model');
const DataSource = require('../services/data-source.service');
const constants = require('./shared/xml-constants-definition');

class SubjectService {
    constructor() {
        this.subjectsSource = DataSource.getSubjectsSource();
    }

    getSimpleSubjectById(id) {
        const subject = this.subjectsSource.find((xmlSubject) => {
            return xmlSubject[constants.TREE_DEF_ATTRIBUTES][constants.SUBJECT_ID] === id
        });
        return new SubjectModel(
            subject[constants.TREE_DEF_ATTRIBUTES][constants.SUBJECT_ID],
            subject[constants.TREE_DEF_ATTRIBUTES][constants.SUBJECT_NAME],
            subject[constants.TREE_DEF_ATTRIBUTES][constants.SUBJECT_SHORT],
            null
        );
    }
}

module.exports = SubjectService;
