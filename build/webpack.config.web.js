const utils = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  target: 'web',
  entry: utils.srcPath('entry.web.js'),
  output: {
    filename: 'app.bundle.js',
    path: utils.distPath('web')
  },
  resolve: {
    alias: {
      '~': utils.srcPath(),
      'vue': 'vue/dist/vue.js'
    },
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: utils.srcPath('index.html')
    })
  ]
}