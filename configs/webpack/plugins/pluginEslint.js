const ESLintPlugin = require('eslint-webpack-plugin');
// -----------------------------------------------
const CONSTANTS = require('../utils/constants');

const config = {
  context: CONSTANTS.PATHS.eslintSrc,
  fix: false,
  emitError: true,
  emitWarning: true,
  failOnError: true,
  extensions: ['js', 'ts', 'tsx'],
};

module.exports = new ESLintPlugin(config);
