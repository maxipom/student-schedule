const ClassModel = require('../model/class.model');
const DataSource = require('../services/data-source.service');
const constants = require('./shared/xml-constants-definition');
const GENERIC_CLASS_NAME = 'I';

class ClassService {
    constructor() {
        this.classSource = DataSource.getClassesSource();
    }

    getClassModelById(id) {
        const xmlClass = this.classSource.find((xmlClass) => {
            return xmlClass[constants.TREE_DEF_ATTRIBUTES][constants.CLASS_ID] === id;
        });
        return ClassService.getClassModelFormXml(xmlClass);
    }

    static getClassModelFormXml(xmlClass) {
        return new ClassModel(
            xmlClass[constants.TREE_DEF_ATTRIBUTES][constants.CLASS_ID],
            xmlClass[constants.TREE_DEF_ATTRIBUTES][constants.CLASS_NAME],
            xmlClass[constants.TREE_DEF_ATTRIBUTES][constants.CLASS_SHORT]);
    }

    getClassesByIds(classesIds) {
        return classesIds.map((id) => {
            return this.getClassModelById(id);
        });
    }

    getClassById(classId) {
        return this.getClassModelById(classId);
    }

    getAllClasses() {
        return this.classSource
            .map((xmlClass) => {
                return ClassService.getClassModelFormXml(xmlClass);
            }).filter((classModel) => {
                return classModel.short !== GENERIC_CLASS_NAME;
            });
    }

}

module.exports = ClassService;
