const ClassModel = require('../model/class.model');

class ClassService {
    constructor(classSource) {
        this.classSource = classSource;
    }

    getSimpleClassById(id) {
        return new ClassModel(id, null, null);
    }

    getSimpleClassesByIds(classesIds) {
        let classesArray = [];
        classesIds.forEach((id) => {
            classesArray.push(this.getSimpleClassById(id));
        });
        return classesArray;
    }

}

module.exports = ClassService;
