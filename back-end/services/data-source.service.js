let mainSource;


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
        return this.getMainSource()['timetable']['students']['student'];
    },
    getTeachersSource: function getTeachersSource() {
        return this.getMainSource()['timetable']['teachers']['teacher'];
    },
    getLessonsSource: function getTeachersSource() {
        return this.getMainSource()['timetable']['lessons']['lesson'];
    },
    getCardsSource: function getTeachersSource() {
        return this.getMainSource()['timetable']['cards']['card'];
    },
    getClassesSource: function getTeachersSource() {
        return this.getMainSource()['timetable']['classes']['class'];
    },
    getClassroomsSource: function getTeachersSource() {
        return this.getMainSource()['timetable']['classrooms']['classroom'];
    },
    getSubjecsSource: function getTeachersSource() {
        return this.getMainSource()['timetable']['subjects']['subject'];
    },


};
