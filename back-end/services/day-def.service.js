const DayDefModel = require('../model/day-def.model');
const DataSource = require('../services/data-source.service');

class DayDefService {
    constructor() {
        this.daysDefsSource = DataSource.getDayDefSource(); //TODO: Change this to DataSource
    }

    static getSimpleDayDefById(id) {
        return new DayDefModel(id, null, null, null);
    }

    static getDayDefModelFromXMl(xmlDayDef) {
        return new DayDefModel(
            xmlDayDef['_attributes']['id'],
            xmlDayDef['_attributes']['name'],
            xmlDayDef['_attributes']['short'],
            xmlDayDef['_attributes']['days'],
        );
    }

    getAllDaysDefs() {
        return this.daysDefsSource.map((xmlDayDef) => {
            return DayDefService.getDayDefModelFromXMl(xmlDayDef);
        });
    }
}

module.exports = DayDefService;
