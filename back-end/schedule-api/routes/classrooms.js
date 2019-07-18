const express = require('express');
const ScheduleController = require('../../controller/schedule.controller');
const router = express.Router();

router.get('/', function (req, res, next) {
    try {
        const scheduleController = new ScheduleController();
        res.json({classrooms: scheduleController.getClassrooms()});
        console.log('Calling classrooms/');
    } catch (err) {
        return next(err);
    }
});
router.get('/cards', function (req, res, next) {
    try {
        const classroomsId = req.query.id;
        console.log('Calling classrooms/cards, params: classroomId = ' + classroomsId);
        const scheduleController = new ScheduleController();
        res.json({cards: scheduleController.getCardsByClassroomId(classroomsId)});

    } catch (err) {
        return next(err);
    }
});

module.exports = router;
