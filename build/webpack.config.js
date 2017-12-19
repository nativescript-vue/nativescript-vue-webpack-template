const utils = require('./utils')
const merge = require('webpack-merge')

const defaults = {
  context: utils.srcPath(),
  resolve: {
    extensions: [
      '.js',
      '.css',
      '.vue',
    ]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'nativescript-vue-loader'
      }
    ]
  }
}

const webConfig = merge(defaults, require('./webpack.config.web'))
const nativeConfig = merge(defaults, require('./webpack.config.native'))

module.exports = [webConfig, nativeConfig]