// Set up mongoose connection
const mongoose = require('mongoose');
const { dbUrl } = require('./config');
const logger = require('./logger');

const connection = mongoose.connect(dbUrl, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', (err) => {
  logger.error(`MongoDB connection error: ${err}`);
});

module.exports = connection;
