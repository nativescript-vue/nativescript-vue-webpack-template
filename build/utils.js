const pathModule = require('path')
const spawn = require('child_process').spawn

module.exports.srcPath = (path = '') => {
  return pathModule.resolve(__dirname, '../src', path)
}

module.exports.srcPathGlob = (path = '', glob = '') => {
  return pathModule.resolve(__dirname, '../src', path) + pathModule.sep + glob
}

module.exports.distPath = (path = '') => {
  return pathModule.resolve(__dirname, '../dist', path)
}

module.exports.distPathGlob = (path = '', glob = '') => {
  return pathModule.resolve(__dirname, '../dist', path) + pathModule.sep + glob
}

module.exports.runCommand = (command) => {
  return new Promise((resolve, reject) => {
    const split = command.split(' ')
    const child = spawn(split[0], split.slice(1), { shell: true })

    child.stdout.on('data', data => process.stdout.write(data))
    child.on('error', data => reject(`The command '${command}' has failed.`))
    child.on('exit', () => resolve())
  })
}
