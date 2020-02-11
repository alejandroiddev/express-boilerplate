const winston = require('winston');
const config = require('./config');

const level = config.logLevel;

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level,
      colorize: true,
      timestamp() {
        return (new Date()).toISOString();
      },
    }),
  ],
});

logger.stream = {
  write(message) {
    logger.info(message.trim());
  },
};

module.exports = logger;
