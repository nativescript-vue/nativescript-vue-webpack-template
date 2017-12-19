<template web>
    <div class="App">
        <h1>Hello Web App</h1>
        <ImageGallery/>
    </div>
</template>

<template native>
    <StackLayout>
        <Label text="Hello Mobile App" style="font-size: 48;"/>
        <ImageGallery/>
    </StackLayout>
</template>

<script>
  import ImageGallery from '../components/ImageGallery'

  export default {
    components: {
      ImageGallery
    }
  }
</script>