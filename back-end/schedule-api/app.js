const express = require('express');
const bodyParser = require('body-parser');

const teachers = require('./routes/teachers');
const schedule = require('./routes/schedule');
const students = require('./routes/students');
const classrooms = require('./routes/classrooms');
const classes = require('./routes/classes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

console.log('App.js on!');
app.use('/api/teachers', teachers);
app.use('/api/schedule', schedule);
app.use('/api/students', students);
app.use('/api/classrooms', classrooms);
app.use('/api/classes', classes);

module.exports = app;
