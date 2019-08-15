const constants = require('./shared/xml-constants-definition');
let mainSource;

function _getMainSource() {
    const convert = require('xml-js');
    const xmlFile = require('fs').readFileSync('./base.xml', 'utf-8');
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
        return this.getMainSource()[constants.TREE_DEF_MAIN_NODE][constants.TREE_DEF_STUDENT_NODE][constants.STUDENT_TABLE_NAME];
    },
    getTeachersSource: function getTeachersSource() {
        return this.getMainSource()[constants.TREE_DEF_MAIN_NODE][constants.TREE_DEF_TEACHERS_NODE][constants.TEACHER_TABLE_NAME];
    },
    getLessonsSource: function getLessonsSource() {
        return this.getMainSource()[constants.TREE_DEF_MAIN_NODE][constants.TREE_DEF_LESSONS_NODE][constants.LESSON_TABLE_NAME];
    },
    getCardsSource: function getCardsSource() {
        return this.getMainSource()[constants.TREE_DEF_MAIN_NODE][constants.TREE_DEF_CARDS_NODE][constants.CARD_TABLE_NAME];
    },
    getClassesSource: function getClassesSource() {
        return this.getMainSource()[constants.TREE_DEF_MAIN_NODE][constants.TREE_DEF_CLASSES_NODE][constants.CLASS_TABLE_NAME];
    },
    getClassroomsSource: function getClassroomsSource() {
        return this.getMainSource()[constants.TREE_DEF_MAIN_NODE][constants.TREE_DEF_CLASSROOMS_NODE][constants.CLASSROOM_TABLE_NAME];
    },
    getSubjectsSource: function getSubjectsSource() {
        return this.getMainSource()[constants.TREE_DEF_MAIN_NODE][constants.TREE_DEF_SUBJECTS_NODE][constants.SUBJECT_TABLE_NAME];
    },
    getPeriodSource: function getPeriodSource() {
        return this.getMainSource()[constants.TREE_DEF_MAIN_NODE][constants.TREE_DEF_PERIODS_NODE][constants.PERIOD_TABLE_NAME];
    },
    getDayDefSource: function getDayDefSource() {
        return this.getMainSource()[constants.TREE_DEF_MAIN_NODE][constants.TREE_DEF_DAYSDEFS_NODE][constants.DAYDEF_TABLE_NAME];
    },
    getStudentSubject: function getStudentSubject() {
        return this.getMainSource()[constants.TREE_DEF_MAIN_NODE][constants.TREE_DEF_STUDENTSUBJECTS_NODE][constants.STUDENTSUBJECT_TABLE_NAME];
    },
};
