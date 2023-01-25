// const HtmlWebpackPlugin = require("html-webpack-plugin")

// //---------------------------------
// const CONSTANTS = require('./constants');

// module.exports = {
//   generateEntryPoints: (entry) => {
//     return entry.reduce((obj, item) => {
//       return {
//         ...obj,
//         [item]: [path.join(CONSTANTS.PATHS.appSrcPages, `${item}.tsx`)]
//       }
//     }, {})
//   },

//   generateHtml: (entry) => {
//     return entry.map((i) => {
//       return new HtmlWebpackPlugin({
//         chunks: [i],
//         filename: `../pages/${i}.tsx`,
//         template: path.join(CONSTANTS.PATHS.appSrcComponents, 'template.tsx')
//       })
//     })
//   }
// }