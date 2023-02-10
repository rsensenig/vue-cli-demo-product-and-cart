const winston = require('winston');

const logger = winston.createLogger({
  format: winston.format.simple(),
//   defaultMeta: { service: 'user-service' },
  transports: [new winston.transports.Console()],
});

module.exports = logger;
