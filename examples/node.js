const logger = require('../logger-node');

logger.logger.level = logger.level.DEBUG;

logger.logger.fatal('This is fatal');
logger.logger.error('This is error');
logger.logger.warn('This is warn');
logger.logger.info('This is info');
logger.logger.debug('This is debug');
