const ClassroomModel = require('../model/classroom.model');
const DataSource = require('../services/data-source.service');

class ClassroomService {
    constructor() {
        this.classroomsSource = DataSource.getClassroomsSource();
    }

    getAllClassrooms() {
        return this.classroomsSource.map((xmlClassroom) => {
            return ClassroomService.getClassroomModelFromXML(xmlClassroom);
        });
    }

    getClassroomsByIds(classroomsIds) {
        return classroomsIds.map((id) => {
            return this.getClassroomById(id);
        });
    }

    getClassroomById(id) {
        const xmlClassroom = this.classroomsSource.find((classroom) => {
            return classroom['_attributes']['id'] === id;
        });
        return ClassroomService.getClassroomModelFromXML(xmlClassroom);
    }

    static getClassroomModelFromXML(xmlClassroom) {
        return new ClassroomModel(
            xmlClassroom['_attributes']['id'],
            xmlClassroom['_attributes']['name'],
            xmlClassroom['_attributes']['short'],
            xmlClassroom['_attributes']['capacity'],
        );
    }
}

module.exports = ClassroomService;
