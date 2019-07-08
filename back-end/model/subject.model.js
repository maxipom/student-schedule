class SubjectModel {
    constructor(id, name, short, students) {
        this._id = id;
        this._name = name;
        this._short = short;
        this._students = students;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get short() {
        return this._short;
    }

    set short(value) {
        this._short = value;
    }

    get students() {
        return this._students;
    }

    set students(value) {
        this._students = value;
    }
}

module.exports = SubjectModel;
