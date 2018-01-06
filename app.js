const express = require('express');
const path = require('path');
const logger = require('morgan');

const index = require('./routes');
const dal = require('./dal');
const app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index(dal));

module.exports = app;
