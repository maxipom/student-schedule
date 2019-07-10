const PeriodModel = require('../model/period.model');
const DataSource = require('../services/data-source.service');

class PeriodService {
    constructor() {
        this.periodsSource = DataSource.getPeriodSource();
    }

    getPeriodById(periodId) {
        const periodFromXml = this.periodsSource.find((teacher) => {
            return teacher['_attributes']['period'] === periodId;
        });
        return new PeriodModel(
            periodFromXml['_attributes']['period'],
            periodFromXml['_attributes']['name'],
            periodFromXml['_attributes']['short'],
            periodFromXml['_attributes']['startTime'],
            periodFromXml['_attributes']['endTime'],
        );
    }

    getAllPeriods() {
        const periods = [];
        this.periodsSource.forEach((xmlPeriod) => {
            periods.push(this.getPeriodById(xmlPeriod['_attributes']['period']))
        });
        return periods;
    }
}
module.exports = PeriodService;
