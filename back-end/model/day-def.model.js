class DayDefModel {
    constructor(id,name,short,day) {
        this._short = short;
        this._id = id;
        this._name = name;
        this._day = day;
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

    get day() {
        return this._day;
    }

    set day(value) {
        this._day = value;
    }
}
module.exports = DayDefModel;
