class LessonModel {
    get student() {
        return this._student;
    }

    set student(value) {
        this._student = value;
    }
    constructor(id,classes,dayDef,classrooms,periodsPerCard,periodsPerWeek,seminarGroup,subject,teachers,student){
        this._id = id;
        this._classes = classes;
        this._dayDef = dayDef;
        this._classrooms = classrooms;
        this._periodsPerCard = periodsPerCard;
        this._periodsPerWeek = periodsPerWeek;
        this._seminarGroup = seminarGroup;
        this._subject = subject;
        this._teachers = teachers;
        this._student = student;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get classes() {
        return this._classes;
    }

    set classes(value) {
        this._classes = value;
    }

    get dayDef() {
        return this._dayDef;
    }

    set dayDef(value) {
        this._dayDef = value;
    }

    get classrooms() {
        return this._classrooms;
    }

    set classrooms(value) {
        this._classrooms = value;
    }

    get periodsPerCard() {
        return this._periodsPerCard;
    }

    set periodsPerCard(value) {
        this._periodsPerCard = value;
    }

    get periodsPerWeek() {
        return this._periodsPerWeek;
    }

    set periodsPerWeek(value) {
        this._periodsPerWeek = value;
    }

    get seminarGroup() {
        return this._seminarGroup;
    }

    set seminarGroup(value) {
        this._seminarGroup = value;
    }

    get subject() {
        return this._subject;
    }

    set subject(value) {
        this._subject = value;
    }

    get teachers() {
        return this._teachers;
    }

    set teachers(value) {
        this._teachers = value;
    }
}
module.exports = LessonModel;
