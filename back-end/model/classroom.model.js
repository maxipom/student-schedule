class ClassroomModel {
    get capacity() {
        return this._capacity;
    }

    set capacity(value) {
        this._capacity = value;
    }
    constructor(id, name, short,capacity) {
        this._id = id;
        this._name = name;
        this._short = short;
        this._capacity = capacity;
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
}

module.exports = ClassroomModel;
