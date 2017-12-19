console.log('entry.native.js')
const Vue = require('nativescript-vue')
const App = require('./views/App').default

new Vue({
  template: `
    <Page>
        <Label text="Hello World"/>
        <App/>
    </Page>
  `,

  components: {
    App
  }
}).$start();