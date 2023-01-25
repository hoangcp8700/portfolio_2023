const CONSTANTS = require('./utils/constants');

module.exports = {
  devServer: {
    static: {
      directory: CONSTANTS.PATHS.appBuild,
    },
    // Enable gzip compression
    compress: true,
    port: CONSTANTS.ENV.PORT,
    open: true,
    liveReload: true,
    hot: true,

    client: {
      logging: 'none',
      overlay: {
        warnings: false,
        errors: true,
      },
    },
    historyApiFallback: true, // browser refresh will fail otherwise
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
    // send API requests on API backend
    proxy: [
      {
        context: ['/auth', '/api'],
        target: 'http://localhost:3000',
      },
    ],
    // This option allows you to allowlist services that are allowed to access the dev server.
    //  allowedHosts: []
    allowedHosts: 'auto', //  allows localhost, host, and client.webSocketURL.hostname:
  },
};
