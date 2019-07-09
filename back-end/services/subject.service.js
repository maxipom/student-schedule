const SubjectModel = require('../model/subject.model');
const DataSource = require('../services/data-source.service');

class SubjectService {
    constructor() {
        this.subjectsSource = DataSource.getSubjecsSource();
    }

    getSimpleSubjectById(id) {
        const subject = this.subjectsSource.find((xmlSubject) => {
            return xmlSubject['_attributes']['id'] === id
        });
        return new SubjectModel(
            subject['_attributes']['id'],
            subject['_attributes']['name'],
            subject['_attributes']['short'],
            null
        );
    }
}

module.exports = SubjectService;
