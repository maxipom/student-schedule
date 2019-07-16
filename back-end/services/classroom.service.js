const ClassroomModel = require('../model/classroom.model');
const DataSource = require('../services/data-source.service');

class ClassroomService {
    constructor() {
        this.classroomsSource = DataSource.getClassroomsSource();
    }

    getAllClassrooms() {
        const classroom = [];
        this.classroomsSource.forEach((xmlClassroom) => {
            classroom.push(this.getClassroomById(xmlClassroom['_attributes']['id']))
        });
        return classroom;
    }

    getClassroomsByIds(classroomsIds) {
        let classroomsArray = [];
        classroomsIds.forEach((id) => {
            classroomsArray.push(this.getClassroomById(id));
        });
        return classroomsArray;
    }

    getClassroomById(id) {
        const xmlClassroom = this.classroomsSource.find((classroom) => {
            return classroom['_attributes']['id'] === id;
        });
        return this._getClassroomFromXML(xmlClassroom);
    }

    _getClassroomFromXML(classroom) {
        return new ClassroomModel(
            classroom['_attributes']['id'],
            classroom['_attributes']['name'],
            classroom['_attributes']['short'],
            classroom['_attributes']['capacity'],
        );
    }
}

module.exports = ClassroomService;
