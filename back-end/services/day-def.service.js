const DataSource = require('../services/data-source.service');
const DayDefModel = require('../model/day-def.model');
const constants = require('./shared/xml-constants-definition');

class DayDefService {
    constructor() {
        this.daysDefsSource = DataSource.getDayDefSource(); //TODO: Change this to DataSource
    }

    static getSimpleDayDefById(id) {
        return new DayDefModel(id, null, null, null);
    }

    static getDayDefModelFromXMl(xmlDayDef) {
        return new DayDefModel(
            xmlDayDef[constants.TREE_DEF_ATTRIBUTES][constants.DAYDEF_ID],
            xmlDayDef[constants.TREE_DEF_ATTRIBUTES][constants.DAYDEF_NAME],
            xmlDayDef[constants.TREE_DEF_ATTRIBUTES][constants.DAYDEF_SHORT],
            xmlDayDef[constants.TREE_DEF_ATTRIBUTES][constants.DAYDEF_DAYS],
        );
    }

    getAllDaysDefs() {
        return this.daysDefsSource.map((xmlDayDef) => {
            return DayDefService.getDayDefModelFromXMl(xmlDayDef);
        });
    }
}

module.exports = DayDefService;
