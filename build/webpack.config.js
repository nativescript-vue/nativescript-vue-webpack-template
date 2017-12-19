const utils = require('./utils')
const merge = require('webpack-merge')

const defaults = {
  resolve: {
    alias: {
      '~': utils.srcPath()
    }
  }
}

const webConfig = merge(defaults, require('./webpack.config.web'))
const nativeConfig = merge(defaults, require('./webpack.config.native'))

module.exports = [webConfig, nativeConfig]