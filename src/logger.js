const { format, createLogger, transports } = require('winston');
const { timestamp, combine, printf } = format;

// custom format:
const logFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

// creating logger here:
const logger = createLogger({
  // default log level is set to info
  // level: 'debug',
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    logFormat
  ),
  // format: winston.format.simple(),
//   defaultMeta: { service: 'user-service' },
  transports: [new transports.Console()],
});

module.exports = logger;
