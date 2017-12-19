const path = require('path')
const merge = require('webpack-merge')

const defaults = {
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '..', 'src')
    }
  }
}

const webConfig = merge(defaults, require('./webpack.config.web'))
const nativeConfig = merge(defaults, require('./webpack.config.native'))

module.exports = [webConfig, nativeConfig]