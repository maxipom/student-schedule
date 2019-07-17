const express = require('express');
const ScheduleController = require('../../controller/schedule.controller');
const router = express.Router();

router.get('/', function (req, res, next) {
    try {
        const scheduleController = new ScheduleController();
        res.json({classes: scheduleController.getGroups()});
        console.log('Calling groups/');
    } catch (err) {
        return next(err);
    }
});
router.get('/cards', function (req, res, next) {
    try {
        const groupId = req.query.id;
        console.log('Calling groups/cards, params: groupId = ' + groupId);
        const scheduleController = new ScheduleController();
        res.json({cards: scheduleController.getCardsByClassroomId(groupId)});

    } catch (err) {
        return next(err);
    }
});

module.exports = router;
