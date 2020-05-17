// const log4js = require("log4js");
// const config = require("../config.json");

// const logger = log4js.getLogger();
// logger.level = config.log.level;

// log4js.configure({
//     appenders: { cheese: { type: 'file', filename: 'articles.log' } }
//   });




const log4js = require('log4js');
const config = require("../config.json");
log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});
 
const logger = log4js.getLogger('cheese');
logger.level = config.log.level;
logger.level = module.exports = logger;