<template web>
    <div class="App">
        <h1>Hello Web App</h1>
        <h2>
            {{ msg }}
        </h2>
        <ImageGallery/>
    </div>
</template>

<template native>
    <StackLayout>
        <Label text="Hello mobile App" style="font-size: 48;"/>
        <Label :text="msg" style="font-size: 48;"/>
        <ImageGallery/>
    </StackLayout>
</template>

<script>
  import ImageGallery from '../components/ImageGallery'

  export default {
    data() {
      return {
        msg: TNS_PLATFORM
      }
    },
    components: {
      ImageGallery
    }
  }
</script>