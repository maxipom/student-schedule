class TeacherModel {
    constructor(id, gender, firstName, lastName, name, short) {

        this._id = id;
        this._gender = gender;
        this._firstName = firstName;
        this._lastName = lastName;
        this._name = name;
        this._short = short;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
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
}
module.exports = TeacherModel;
