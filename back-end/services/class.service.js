const ClassModel = require('../model/class.model');
const DataSource = require('../services/data-source.service');

class ClassService {
    constructor() {
        this.classSource = DataSource.getClassesSource();
    }

    getSimpleClassById(id) {
        const xmlClass = this.classSource.find((xmlClass) => {
            return xmlClass['_attributes']['id'] === id;
        });
        return new ClassModel(
            xmlClass['_attributes']['id'],
            xmlClass['_attributes']['name'],
            xmlClass['_attributes']['short']);
    }

    getClassesByIds(classesIds) {
        let classesArray = [];
        classesIds.forEach((id) => {
            const newClass = this.getSimpleClassById(id);
            classesArray.push(newClass);
        });
        return classesArray;
    }

}

module.exports = ClassService;
