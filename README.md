# React 18 (Typescript) + React-Router 6 + Webpack 5 HMR Boilerplate

[Webpack 5](https://webpack.js.org/) boilerplate with support of most common loaders and modules

## Features

- Integration [Storybook](https://storybook.js.org/) to management components
- [Babel 7](https://babeljs.io/)
- Typescript (using [ForkTsCheckerWebpack](https://www.npmjs.com/package/fork-ts-checker-webpack-plugin) )
- Support css, scss with [style-loader](https://webpack.js.org/loaders/style-loader/) and minimize css in production [CssMinimizerWebpackPlugin](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/)
- [React Refresh](<(https://www.npmjs.com/package/@pmmmwh/react-refresh-webpack-plugin)>)
- [Stylelint](https://stylelint.io/)
- [EsLint](https://www.npmjs.com/package/eslint)
- [Prettier](https://www.npmjs.com/package/prettier)
- [Webpack dev server](https://webpack.js.org/configuration/dev-server/)
- Integration SEO with [react-helmet-async](https://www.npmjs.com/package/react-helmet-async)
- Support importing SVG Component and using [@svgr/webpack](https://www.npmjs.com/package/@svgr/webpack) and compress svg to base64 [mini-svg-data-uri](https://www.npmjs.com/package/mini-svg-data-uri)
- Minimize size image with [image-minimizer-webpack-plugin](https://webpack.js.org/plugins/image-minimizer-webpack-plugin/)
- [Husky](https://www.npmjs.com/package/husky) prehooks and [lint-staged](https://www.npmjs.com/package/lint-staged)
- Create component, container, page with tool [hygen](https://www.hygen.io/)
- View output files with [Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
<!-- - postcss loader (with [autoprefixer](https://www.npmjs.com/package/autoprefixer) and [cssnano](https://www.npmjs.com/package/cssnano)) -->

## Quick start

To run this locally:

1. run `git clone https://github.com/hoangcp8700/react-webpack.git react-webpack-setup-project`
2. Install all dependencies using `yarn`
   2a. Start the development server using `yarn dev`
   2b. Start the production using `yarn start`
3. start storybook: `yarn storybook`
4. start bundle analyzer: `yarn analyzer`

## Production

Production: `https://hcp-react-webpack.netlify.app/`
