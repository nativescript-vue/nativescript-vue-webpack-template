const utils = require('./utils')
const FileManagerPlugin = require('filemanager-webpack-plugin')

module.exports = {
  entry: utils.srcPath('entry.native.js'),
  output: {
    filename: 'app.bundle.js',
    path: utils.distPath('native/app'),
  },

  plugins: [
    new FileManagerPlugin({
      onStart: {
        copy: [
          {
            source: utils.srcPathGlob('resources', '**/*'),
            destination: utils.distPath('native/app/App_Resources')
          }
        ]
      }
    })
  ]
}