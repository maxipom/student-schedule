const ClassModel = require('../model/class.model');
const DataSource = require('../services/data-source.service');

const GENERIC_CLASS_NAME = 'I';

class ClassService {
    constructor() {
        this.classSource = DataSource.getClassesSource();
    }

    getClassModelById(id) {
        const xmlClass = this.classSource.find((xmlClass) => {
            return xmlClass['_attributes']['id'] === id;
        });
        return ClassService.getClassModelFormXml(xmlClass);
    }

    static getClassModelFormXml(xmlClass) {
        return new ClassModel(
            xmlClass['_attributes']['id'],
            xmlClass['_attributes']['name'],
            xmlClass['_attributes']['short']);
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
