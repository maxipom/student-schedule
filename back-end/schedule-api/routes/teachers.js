const express = require('express');
const ScheduleController = require('../../controller/schedule.controller');
const router = express.Router();

router.get('/', function (req, res, next) {
    try {
        const scheduleController = new ScheduleController();
        res.json({teachers: scheduleController.getTeachers()});
        console.log('Calling teachers/');
    } catch (err) {
        return next(err);
    }
});
router.get('/cards', function (req, res, next) {
    try {
        const teacherId = req.query.id;
        console.log('Calling teacher/cards, params: teacherId = ' + teacherId);
        const scheduleController = new ScheduleController();
        res.json({cards: scheduleController.getCardsByTeacherId(teacherId)});

    } catch (err) {
        return next(err);
    }
});

module.exports = router;
