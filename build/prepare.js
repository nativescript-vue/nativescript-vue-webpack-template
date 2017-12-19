// prepares the dist directory for webpack
const utils = require('./utils')
const fs = require('fs')

const nativeDir = utils.distPath('native')

const APP_TEMPLATE = 'nativescript-vue-base-template'
const APP_ID = 'org.nativescript.vue.webpack'

let files = []
try {
  files = fs.readdirSync(nativeDir)
} catch (err) {
  // intentionally left blank
} finally {
  if (!files.length) {
    console.log('Creating nativescript project...')
    utils.runCommand(`tns create --path dist native --template ${APP_TEMPLATE} --appid ${APP_ID}`)
      .then(() => {
        console.log('Successfully prepared project')
      })
      .catch(() => {
        console.log('Couldn\'t prepare project...')
      })
  }
}
