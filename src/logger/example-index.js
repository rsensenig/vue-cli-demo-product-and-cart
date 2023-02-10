const logger = require('./example-logger');

logger.info('text info', {meta1: 'meta1'});
logger.warn('text warn');
logger.error('text error');
// logger.debug('text debug');
logger.error(new Error('something went wrong'));

// console.log('hello');
// console.info('text info');
// console.warn('text warn');
// console.error('text error');
// console.error(new Error('something went wrong'));