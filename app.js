const express = require('express');
const path = require('path');
const logger = require('morgan');
const config = require("config");
const index = require('./routes');
const dal = require('./dal')(config);
const app = express();

app.use(logger('dev'));

app.use('/bower_components',  express.static( path.join(__dirname, '/bower_components')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/hotels', index(dal));

module.exports = app;
