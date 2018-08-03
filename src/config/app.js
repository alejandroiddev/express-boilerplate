const express = require('express');
const morgan = require('morgan');

const logger = require('./logger');
const routes = require('../api/routes');

require('./db');

const app = express();

app.use(morgan('tiny', { stream: logger.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

module.exports = app;
