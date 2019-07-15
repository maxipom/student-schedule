const DayDefModel = require('../model/day-def.model');
const DataSource = require('../services/data-source.service');

class DayDefService {
    constructor() {
        this.daysDefsSource = DataSource.getDayDefSource(); //TODO: Change this to DataSource
    }

    getSimpleDayDefById(id){
        return new DayDefModel(id,null,null,null);
    }

    getDayDefById(periodId) {
        const dayDefFromXml = this.daysDefsSource.find((dayDef) => {
            return dayDef['_attributes']['id'] === periodId;
        });
        return new DayDefModel(
            dayDefFromXml['_attributes']['id'],
            dayDefFromXml['_attributes']['name'],
            dayDefFromXml['_attributes']['short'],
            dayDefFromXml['_attributes']['days'],
        );
    }

    getAllDaysDefs() {
        const daysDefs = [];
        this.daysDefsSource.forEach((xmlDayDef) => {
            daysDefs.push(this.getDayDefById(xmlDayDef['_attributes']['id']))
        });
        return daysDefs;
    }
}

module.exports = DayDefService;
