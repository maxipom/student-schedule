class ClassModel {
    constructor(id, name, short) {
        this._id = id;
        this._name = name;
        this._short = short;
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

module.exports = ClassModel;
