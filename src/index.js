require('dotenv').config();
const app = require('./config/app');
const { handleServerListen } = require('./services/handlers.service');
const logger = require('./config/logger');
const config = require('./config/config');

app.listen(config.port, handleServerListen(logger.info, config.port, config.appName));
