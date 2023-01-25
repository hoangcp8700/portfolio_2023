
const performanceDev = {
  hints: false,
}

const performanceProduct = {
  hints: "warning",
  maxEntrypointSize: 512000,
  maxAssetSize: 512000
}

module.exports = {
  performanceDev,
  performanceProduct
}