const svgToMiniDataURI = require('mini-svg-data-uri');

const svgReactLoader = {
  test: /\.svg$/i,
  resourceQuery: /r/,
  use: [
    {
      loader: '@svgr/webpack',
      options: {
        prettier: false,
        icon: true,
      },
    },
    // 'new-url-loader', // NOTE: convert svg
  ],
};

const svgURILoader = {
  test: /\.svg$/i,
  resourceQuery: { not: [/r/] }, // exclude react component if *.svg?r
  type: 'asset/inline',
  generator: {
    dataUrl: (content) => {
      content = content.toString();
      return svgToMiniDataURI(content);
    },
  },
};

module.exports = {
  svgReactLoader,
  svgURILoader,
};
