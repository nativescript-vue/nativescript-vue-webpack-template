<template web>
    <div class="App">
        <h1>Hello Web App</h1>
        <ImageGallery/>
    </div>
</template>

<template android>
    <StackLayout>
        <Label text="Hello android App" style="font-size: 48;"/>
        <ImageGallery/>
    </StackLayout>
</template>

<template ios>
    <StackLayout>
        <Label text="Hello ios App" style="font-size: 48;"/>
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