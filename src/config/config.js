/* eslint-disable radix */
module.exports = {
  appName: 'Express Boilerplate',
  port: parseInt(process.env.SERVER_PORT),
  logLevel: process.env.LOG_LEVEL,
  dbUrl: 'mongodb://localhost:27017/books',

};
