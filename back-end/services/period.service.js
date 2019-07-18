const PeriodModel = require('../model/period.model');
const DataSource = require('../services/data-source.service');

class PeriodService {
    constructor() {
        this.periodsSource = DataSource.getPeriodSource();
    }

    _getPeriodModelFromXml(xmlPeriod) {
        return new PeriodModel(
            xmlPeriod['_attributes']['period'],
            xmlPeriod['_attributes']['name'],
            xmlPeriod['_attributes']['short'],
            xmlPeriod['_attributes']['startTime'],
            xmlPeriod['_attributes']['endTime'],
        );
    }

    getAllPeriods() {
        return this.periodsSource.map((xmlPeriod) => {
            return this._getPeriodModelFromXml(xmlPeriod);
        });
    }
}

module.exports = PeriodService;
