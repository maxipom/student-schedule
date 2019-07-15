let mainSource;

const MAIN_TABLE_NAME = 'timetable';

function _getMainSource() {
    const convert = require('xml-js');
    const xmlFile = require('fs').readFileSync('./base.xml', 'utf8');
    return convert.xml2js(xmlFile, {compact: true, spaces: 3});
}
module.exports = {

    getMainSource: function getMainSource() {
        if (!mainSource) {
            mainSource = _getMainSource();
        }
        return mainSource;
    },

    getStudentSource: function getStudentSource() {
        return this.getMainSource()[MAIN_TABLE_NAME]['students']['student'];
    },
    getTeachersSource: function getTeachersSource() {
        return this.getMainSource()[MAIN_TABLE_NAME]['teachers']['teacher'];
    },
    getLessonsSource: function getLessonsSource() {
        return this.getMainSource()[MAIN_TABLE_NAME]['lessons']['lesson'];
    },
    getCardsSource: function getCardsSource() {
        return this.getMainSource()[MAIN_TABLE_NAME]['cards']['card'];
    },
    getClassesSource: function getClassesSource() {
        return this.getMainSource()[MAIN_TABLE_NAME]['classes']['class'];
    },
    getClassroomsSource: function getClassroomsSource() {
        return this.getMainSource()[MAIN_TABLE_NAME]['classrooms']['classroom'];
    },
    getSubjectsSource: function getSubjectsSource() {
        return this.getMainSource()[MAIN_TABLE_NAME]['subjects']['subject'];
    },
    getPeriodSource: function getPeriodSource() {
        return this.getMainSource()[MAIN_TABLE_NAME]['periods']['period'];
    },
    getDayDefSource: function getDayDefSource() {
        return this.getMainSource()[MAIN_TABLE_NAME]['daysdefs']['daysdef'];
    },


};
