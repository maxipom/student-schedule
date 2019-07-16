var express = require('express');
var bodyParser = require('body-parser');

var teachers = require('./routes/teachers');
var schedule = require('./routes/schedule');
var students = require('./routes/students');
var classrooms = require('./routes/classrooms');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

console.log('App.js on!');
app.use('/api/teachers', teachers);
app.use('/api/schedule', schedule);
app.use('/api/students', students);
app.use('/api/classrooms', classrooms);

module.exports = app;
