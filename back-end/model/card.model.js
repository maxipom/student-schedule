class CardModel {
    constructor(classrooms, day, lesson, period, term, weeks) {
        this._classrooms = classrooms;
        this._day = day;
        this._lesson = lesson;
        this._period = period;
        this._term = term;
        this._weeks = weeks;
    }

    get classrooms() {
        return this._classrooms;
    }

    set classrooms(value) {
        this._classrooms = value;
    }

    get day() {
        return this._day;
    }

    set day(value) {
        this._day = value;
    }

    get lesson() {
        return this._lesson;
    }

    set lesson(value) {
        this._lesson = value;
    }

    get period() {
        return this._period;
    }

    set period(value) {
        this._period = value;
    }

    get term() {
        return this._term;
    }

    set term(value) {
        this._term = value;
    }

    get weeks() {
        return this._weeks;
    }

    set weeks(value) {
        this._weeks = value;
    }
}
module.exports = CardModel;
