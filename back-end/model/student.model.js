class StudentModel {
    constructor(id, name, classId) {
        this._id = id;
        this._name = name;
        this._classId = classId;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get classId() {
        return this._classId;
    }
}

module.exports = StudentModel;

