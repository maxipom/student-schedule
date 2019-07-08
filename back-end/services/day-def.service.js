const DayDefModel = require('../model/day-def.model');

class DayDefService {
    constructor(daysDefsSource) {
        this.daysDefsSource = daysDefsSource;
    }
    getSimpleDayDefById(id){
        return new DayDefModel(id,null,null,null);
    }

}

module.exports = DayDefService
