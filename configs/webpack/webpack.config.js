const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');

module.exports = (envVars) => {
  const { NODE_ENV } = envVars;
  const webpackMode = require(`./webpack.${NODE_ENV}`);

  return merge(webpackCommon(envVars), webpackMode);
};
