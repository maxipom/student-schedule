const express = require('express');
const ScheduleController = require('../../controller/schedule.controller');
const router = express.Router();

router.get('/', function (req, res, next) {
    try {
        const scheduleController = new ScheduleController();
        res.json({groups: scheduleController.getClasses()});
        console.log('Calling classes/');
    } catch (err) {
        return next(err);
    }
});
router.get('/cards', function (req, res, next) {
    try {
        const classId = req.query.id;
        console.log('Calling classes/cards, params: classId = ' + classId);
        const scheduleController = new ScheduleController();
        res.json({cards: scheduleController.getCardsByClassId(classId)});

    } catch (err) {
        return next(err);
    }
});

module.exports = router;
