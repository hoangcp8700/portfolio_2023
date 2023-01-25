'use strict';
const fs = require('fs');
const path = require('path');
// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const ENV = {
  PORT: 3000,
};

const PATHS = {
  src: (url) => resolveApp(url),
  dotenv: resolveApp('.env'),
  appBuild: resolveApp('dist'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveApp('src/index.tsx'),
  pages: (url) => resolveApp(`src/pages/${url}.tsx`),
  appSrc: (url) => resolveApp(`src${url ? `/${url}` : ''}`),
  appSrcComponents: resolveApp('src/components'),
  appSrcPages: resolveApp('src/pages'),
  stylelint: resolveApp('.stylelintrc.json'),
  babelSrc: resolveApp('.babelrc'),
  eslintSrc: resolveApp('.eslintrc'),
  tsconfig: resolveApp('tsconfig.json'),
};

const VARIABLES = {
  TITLE_APP_HTML_DEFAULT: 'React webpack dev',
  EXTENSIONS: ['.tsx', '.ts', '.js'],
};

module.exports = {
  PATHS,
  ENV,
  VARIABLES,
};
