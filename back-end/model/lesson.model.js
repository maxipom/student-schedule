class LessonModel {
    constructor(id,classes,dayDef,classrooms,periodsPerCard,periodsPerWeek,seminarGroup,subject,teachers,student){
        this.id = id;
        this.classes = classes;
        this.dayDef = dayDef;
        this.classrooms = classrooms;
        this.periodsPerCard = periodsPerCard;
        this.periodsPerWeek = periodsPerWeek;
        this.seminarGroup = seminarGroup;
        this.subject = subject;
        this.teachers = teachers;
        this.student = student;
    }
}
module.exports = LessonModel;
