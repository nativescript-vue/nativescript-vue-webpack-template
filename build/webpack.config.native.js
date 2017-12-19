const utils = require('./utils')
const FileManagerPlugin = require('filemanager-webpack-plugin')
const WebpackPreEmitPlugin = require('webpack-pre-emit-plugin')

module.exports = {
  entry: utils.srcPath('entry.native.js'),
  output: {
    filename: 'app.bundle.js',
    path: utils.distPath('native/app'),
  },

  plugins: [
    new WebpackPreEmitPlugin((params, cb) => {
      utils.runCommand('node build/prepare.js').then(cb)
    }),
    new FileManagerPlugin({
      onEnd: {
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