// const GlobImporter = require('node-sass-glob-importer'); // import aliases scss - *.scss

// ----------------------------------------------------
// const CONSTANTS = require('../utils/constants');
const loaderBaseLoader = require('./base');
const { svgReactLoader, svgURILoader } = require('./svg');
const { styleDevLoader, styleProdLoader } = require('./style');
const { babelDevLoader, babelProdLoader } = require('./babel');
// ---------------------------------------------------

const loaderCommon = [...loaderBaseLoader, svgURILoader, svgReactLoader];

const loaderDev = [
  ...loaderCommon,
  babelDevLoader,
  styleDevLoader,
  // loader for dev
];
const loaderProd = [
  ...loaderCommon,
  babelProdLoader,
  styleProdLoader,
  // loader for production
];

module.exports = {
  loaderDev,
  loaderProd,
  loaderCommon,
};
