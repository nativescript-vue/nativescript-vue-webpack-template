const utils = require('./utils')
const merge = require('webpack-merge')({
  customizeArray(a, b, key) {
    if (key === 'resolve.extensions') {
      // groups the extensions and prioritizes platform specific first
      const extensions = a.concat(b)
      return extensions
        .map(e => e.split('.').reverse()[0])
        .filter((ext, i, exts) => exts.indexOf(ext) === i)
        .reduce((acc, next) => {
          const exts = extensions
            .filter(ext => ext.endsWith(next))
            .sort((a, b) => {
              return b.length - a.length;
            })

          acc = acc.concat(exts);
          return acc;
        }, [])
    }

    // Fall back to default merging
    return undefined;
  },
})

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
const androidConfig = merge(defaults, require('./webpack.config.native')('android'))
const iOSConfig = merge(defaults, require('./webpack.config.native')('ios'))

const hasPlatform = (v, platform) => {
  if(Array.isArray(v)) {
    return v.includes(platform)
  }

  return v.indexOf(platform) !== -1
}

module.exports = (env) => {
  if (!env) {
    return [webConfig, androidConfig, iOSConfig]
  }

  const config = [];
  hasPlatform(env.platform, 'web') && config.push(webConfig)
  hasPlatform(env.platform, 'android') && config.push(androidConfig)
  hasPlatform(env.platform, 'ios') && config.push(iOSConfig)

  return config;
}