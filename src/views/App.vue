<template web>
    <div class="App">
        <ImageGallery/>
    </div>
</template>

<template native>
    <StackLayout>
        <ImageGallery/>
    </StackLayout>
</template>

<script>
  import ImageGallery from '~/components/ImageGallery'

  export default {
    components: {
      ImageGallery
    }
  }
</script>