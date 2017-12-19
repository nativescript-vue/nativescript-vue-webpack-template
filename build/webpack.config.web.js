const utils = require('./utils')

module.exports = {
  entry: utils.srcPath('entry.web.js'),
  output: {
    filename: 'app.bundle.js',
    path: utils.distPath('web')
  }
}