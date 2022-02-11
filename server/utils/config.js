/* eslint-disable no-undef */
require('dotenv').config();

const PORT = process.env.PORT || 3003;
const POSTGRES_DB_URL = process.env.NODE_ENV === 'test'
  ? process.env.TEST_POSTGRES_DB_URL
  : process.env.POSTGRES_DB_URL;

module.exports = {
  POSTGRES_DB_URL,
  PORT
};