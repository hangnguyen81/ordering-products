const pg = require('pg');
const config = require('./utils/config');
const logger = require('./utils/logger');

const connectString = config.POSTGRES_DB_URL; 

const client = new pg.Client(connectString);
logger.info ('connecting to POSTGRES DB');

client
  .connect()
  .then(() => logger.info('connected to POSTGRES DB'))
  .catch(err => logger.error('unable to connect to POSTGRES DB', err));

module.exports = client;