

const Dotenv = require('dotenv-webpack'); // integrate .env

// -----------------------------------------------
const CONSTANTS = require('../utils/constants');

const config = {
  path: CONSTANTS.PATHS.dotenv,
};

module.exports = new Dotenv(config);