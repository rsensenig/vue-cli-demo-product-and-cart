// destructuring here means don't have to do winston.createLogger, winston.transports, etc. below
const { format, createLogger, transports } = require('winston')
// destructuring here means don't have to do format.timestamp, format.combine, format.printf, etc. below
const { timestamp, combine, printf, colorize, errors } = format

// custom format:
const logFormat = printf(({ level, message, label, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack || message}`
})

// creating logger here:
const logger = createLogger({
  // default log level is set to info
  // level: 'debug',
  // format: winston.format.simple(),
  format: combine(
    colorize(),
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    // if I get an error, print the stack trace
    errors({ stack: true }),
    logFormat
  ),
  // this piece of meta-data gets attached to all logs, which means these logs will be easy to search for in storage
  defaultMeta: { service: 'user-service' },
  transports: [new transports.Console()]
})

module.exports = logger
