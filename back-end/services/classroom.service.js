const ClassroomModel = require('../model/classroom.model');

class ClassroomService {
    constructor(classroomsSource) {
        this.classroomsSource = classroomsSource;
    }

    getSimpleClassroomById(id) {
        return new ClassroomModel(id, null, null, null);
    }

    getSimpleClassroomsByIds(classroomsIds) {
        let classroomsArray = [];
        classroomsIds.forEach((id) => {
            classroomsArray.push(this.getSimpleClassroomById(id));
        });
        return classroomsArray;
    }
}

module.exports = ClassroomService;
