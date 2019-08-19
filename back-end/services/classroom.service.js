const ClassroomModel = require('../model/classroom.model');
const DataSource = require('../services/data-source.service');
const constants = require('./shared/xml-constants-definition');
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
            return classroom[constants.TREE_DEF_ATTRIBUTES][constants.CLASSROOM_ID] === id;
        });
        return ClassroomService.getClassroomModelFromXML(xmlClassroom);
    }

    static getClassroomModelFromXML(xmlClassroom) {
        return new ClassroomModel(
            xmlClassroom[constants.TREE_DEF_ATTRIBUTES][constants.CLASSROOM_ID],
            xmlClassroom[constants.TREE_DEF_ATTRIBUTES][constants.CLASSROOM_NAME],
            xmlClassroom[constants.TREE_DEF_ATTRIBUTES][constants.CLASSROOM_SHORT],
            xmlClassroom[constants.TREE_DEF_ATTRIBUTES][constants.CLASSROOM_CAPACITY],
        );
    }
}

module.exports = ClassroomService;
