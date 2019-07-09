const express = require('express');
const ScheduleController = require('../../controller/schedule.controller');
const router = express.Router();

/* GET a guid. */
router.get('/', function (req, res, next) {
    try {
        const scheduleController = new ScheduleController();
        res.json({teachers: scheduleController.getTeachers()});

    } catch (err) {
        if (err.name === 'GetError') {
            return res.status(400).json({error: err.message});
        }
        // unexpected error
        return next(err);
    }

});

module.exports = router;
