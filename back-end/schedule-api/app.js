var express = require('express');
var bodyParser = require('body-parser');

var teachers = require('./routes/teachers');
var schedule = require('./routes/schedule');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/teachers', teachers);
app.use('/api/schedule', schedule);

module.exports = app;
