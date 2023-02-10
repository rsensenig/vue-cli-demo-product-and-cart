const { format, createLogger, transports } = require('winston');
const { timestamp, combine, printf } = format;

// custom format:
const logFormat = printf(({ level, message, label, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

// creating logger here:
const logger = createLogger({
  // default log level is set to info
  // level: 'debug',
  format: combine(
    format.colorize(),
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    // if I get an error, print the stack trace
    format.errors({stack: true}),
    logFormat
  ),
  // format: winston.format.simple(),
//   defaultMeta: { service: 'user-service' },
  transports: [new transports.Console()],
});

module.exports = logger;
