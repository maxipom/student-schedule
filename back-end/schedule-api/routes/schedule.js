const express = require('express');
const ScheduleController = require('../../controller/schedule.controller');
const router = express.Router();

router.get('/periods', function (req, res, next) {
    try {
        const scheduleController = new ScheduleController();
        res.json({periods: scheduleController.getPeriods()});
        console.log('Calling schedule/periods');
    } catch (err) {
        return next(err);
    }
});
router.get('/daysDefs', function (req, res, next) {
    try {
        const scheduleController = new ScheduleController();
        res.json({dayDefs: scheduleController.getDaysDefs()});

    } catch (err) {
        return next(err);
    }
});

module.exports = router;
