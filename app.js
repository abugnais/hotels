const express = require('express');
const path = require('path');
const logger = require('morgan');

const index = require('./routes');
const dal = require('./dal');
const app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index(dal));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;

    res.send({message: 'Not Found!'});
});

module.exports = app;
