<template web>
    <div class="ImageGallery">
        <img v-for="image in images" :src="image.src" :alt="image.alt"/>
    </div>
</template>

<template native>
    <ListView :items="images">
        <v-template>
            <Image :src="item.src" :alt="item.alt" />
        </v-template>
    </ListView>
</template>

<script>
    export default {
      data() {
        return {
          images: [
            { src: 'img1.png', alt: 'img1' },
            { src: 'img2.png', alt: 'img2' },
            { src: 'img3.png', alt: 'img3' },
          ]
        }
      }
    }
</script>
