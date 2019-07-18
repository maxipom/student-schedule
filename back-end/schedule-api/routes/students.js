const express = require('express');
const ScheduleController = require('../../controller/schedule.controller');
const router = express.Router();

router.get('/cards', function (req, res, next) {
    try {
        const studentId = req.query.id;
        console.log('Calling students/cards, params: studentId = ' + studentId);
        const scheduleController = new ScheduleController();
        res.json({cards: scheduleController.getCardsByStudentId(studentId)});

    } catch (err) {
        return next(err);
    }
});

module.exports = router;
