const express = require('express');
const ScheduleController = require('../../controller/schedule.controller');
const router = express.Router();

router.get('/periods', function (req, res, next) {
    try {
        const scheduleController = new ScheduleController();
        res.json({periods: scheduleController.getPeriods()});

    } catch (err) {
        return next(err);
    }
});


module.exports = router;
