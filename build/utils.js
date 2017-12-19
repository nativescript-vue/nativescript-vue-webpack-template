const pathModule = require('path')

module.exports.srcPath = (path = '') => {
  return pathModule.resolve(__dirname, '../src', path)
}

module.exports.srcPathGlob = (path = '', glob = '') => {
  return pathModule.resolve(__dirname, '../src', path) + pathModule.sep + glob
}

module.exports.distPath = (path = '') => {
  return pathModule.resolve(__dirname, '../dist', path)
}