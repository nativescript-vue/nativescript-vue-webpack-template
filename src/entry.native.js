console.log('entry.native.js')
const Vue = require('nativescript-vue')
const App = require('./views/App').default

new Vue({
  template: `
    <Page>
        <StackLayout>
            <Label text="Hello World"/>
            <App/>
        </StackLayout>
    </Page>
  `,

  components: {
    App
  }
}).$start();