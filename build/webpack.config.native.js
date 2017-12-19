const utils = require('./utils')
const NativeScriptTarget = require('nativescript-dev-webpack/nativescript-target')
const FileManagerPlugin = require('filemanager-webpack-plugin')
const WebpackPreEmitPlugin = require('webpack-pre-emit-plugin')
const LoaderTargetPlugin = require('webpack/lib/LoaderTargetPlugin')

// This overrides the LoaderTargetPlugin('web') called from NativeScriptTarget
const NativeScriptVueTarget = function (compiler) {
  NativeScriptTarget.bind(this)({
    apply(...plugins) {
      plugins = plugins.filter(p => p.constructor.name !== 'LoaderTargetPlugin')
      plugins.push(new LoaderTargetPlugin('nativescript'))
      compiler.apply(...plugins)
    }
  })
}

module.exports = {
  target: NativeScriptVueTarget,
  entry: utils.srcPath('entry.native.js'),
  output: {
    filename: 'app.bundle.js',
    path: utils.distPath('native/app'),
  },
  resolve: {
    alias: {
      '~': utils.distPath('native/app')
    },
    modules: [
      'node_modules/tns-core-modules',
      'node_modules',
    ]
  },
  node: {
    'http': false,
    'timers': false,
    'setImmediate': false,
    'fs': 'empty',
  },
  externals(context, request, callback) {
    if (context.indexOf('tns-core-modules') !== -1 || /^(ui|application)/i.test(request)) {
      return callback(null, 'commonjs ' + request)
    }
    callback()
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