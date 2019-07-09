const ScheduleController = require('./controller/schedule.controller');

// const studentName = '20180007';
// const studentName = '20110037';
// const studentName = '20170135';
// const studentName = '20170140';
const teacherId = 'B073AFFC1EF01233';

main();

function main() {
    const scheduleController = new ScheduleController();
    _getTeacherCards(teacherId, scheduleController);
}

function _getTeacherCards(teacherId, scheduleController) {
    scheduleController.showTeacherCardsById(teacherId);
}
