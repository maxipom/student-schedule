const SubjectModel = require('../model/subject.model');

class SubjectService {
    constructor(subjectsSource) {
        this.subjectsSource = subjectsSource;
    }

    getSimpleSubjectById(id) {
        return new SubjectModel(id, null, null, null);
    }
}

module.exports = SubjectService;
