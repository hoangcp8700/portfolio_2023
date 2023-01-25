const pluginCleanWebpack = require('./pluginCleanWebpack');
const pluginEslint = require('./pluginEslint');
const pluginForkTsChecker = require('./pluginForkTsChecker');
const pluginTsconfigPath = require('./pluginTsconfigPath');
const pluginMiniCssExtract = require('./pluginMiniCssExtract');
const pluginHtml = require('./pluginHtml');
const pluginDotenv = require('./pluginDotenv');
const pluginStyleLint = require('./pluginStyleLint');
const pluginTerser = require('./pluginTerser');
const pluginCssMinimizer = require('./pluginCssMinimizer');
const pluginCompression = require('./pluginCompression');
const pluginJsonMinimizer = require('./pluginJsonMinimizer');
const pluginCopy = require('./pluginCopy');
const pluginImageMinimizer = require('./pluginImageMinimizer');
const pluginCssoWebpack = require('./pluginCssoWebpack');
const pluginBundleAnalyzer = require('./pluginBundleAnalyzer');

const PLUGINS = {
  pluginCleanWebpack,
  pluginEslint,
  pluginForkTsChecker,
  pluginTsconfigPath,
  pluginMiniCssExtract,
  pluginHtml,
  pluginDotenv,
  pluginStyleLint,
  pluginTerser,
  pluginCssMinimizer,
  pluginCompression,
  pluginJsonMinimizer,
  pluginCopy,
  pluginImageMinimizer,
  pluginCssoWebpack,
  pluginBundleAnalyzer,
};

module.exports = PLUGINS;
