const PeriodModel = require('../model/period.model');
const DataSource = require('../services/data-source.service');
const constants = require('./shared/xml-constants-definition');

class PeriodService {
    constructor() {
        this.periodsSource = DataSource.getPeriodSource();
    }

    static _getPeriodModelFromXml(xmlPeriod) {
        return new PeriodModel(
            xmlPeriod[constants.TREE_DEF_ATTRIBUTES][constants.PERIOD_PERIOD],
            xmlPeriod[constants.TREE_DEF_ATTRIBUTES][constants.PERIOD_NAME],
            xmlPeriod[constants.TREE_DEF_ATTRIBUTES][constants.PERIOD_SHORT],
            xmlPeriod[constants.TREE_DEF_ATTRIBUTES][constants.PERIOD_START_TIME],
            xmlPeriod[constants.TREE_DEF_ATTRIBUTES][constants.PERIOD_END_TIME],
        );
    }

    getAllPeriods() {
        return this.periodsSource.map((xmlPeriod) => {
            return PeriodService._getPeriodModelFromXml(xmlPeriod);
        });
    }
}

module.exports = PeriodService;
