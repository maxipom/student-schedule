var express = require('express');
var bodyParser = require('body-parser');

var teachers = require('./routes/teachers');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/teachers', teachers);

module.exports = app;
