const ScheduleController = require('./controller/schedule.controller');

const studentName = '20180007';
// const studentName = '20110037';
// const studentName = '20170135';
// const studentName = '20170140';
const teacherId = 'B073AFFC1EF01233';

main();




function main() {
    const mainSource = _getMainSource();
    const scheduleController = new ScheduleController(mainSource);
    _getTeacherCards(teacherId,scheduleController);
}

function _getMainSource() {
    const convert = require('xml-js');
    const xmlFile = require('fs').readFileSync('./base.xml', 'utf8');
    return convert.xml2js(xmlFile, {compact: true, spaces: 3});
}

function getStudentCards(studentName, scheduleController) {
    scheduleController.getStudentCards(studentName);
}
function _getTeacherCards(teacherId, scheduleController) {
    scheduleController.showTeacherCardsById(teacherId);
}
