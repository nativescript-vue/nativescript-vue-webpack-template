const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, '..', 'src', 'entry.native.js'),
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, '..', 'dist', 'native', 'app')
  }
}