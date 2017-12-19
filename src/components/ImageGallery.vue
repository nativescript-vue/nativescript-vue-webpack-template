<template web>
    <div class="ImageGallery">
        <ul style="padding: 0;">
            <li v-for="image in images" style="list-style: none; border-bottom: 1px solid #e0e0e0;">
                <div style="display: flex; align-items: center;">
                    <img :src="image.src" :alt="image.alt" height="64px"/>
                    {{ image.alt }}
                </div>
            </li>
        </ul>
    </div>
</template>

<template native>
    <StackLayout>
        <ListView :items="images">
            <v-template>
                <StackLayout orientation="horizontal">
                    <Image :src="item.src" style="height: 64;"/>
                    <Label :text="item.alt" style="vertical-align: center;"/>
                </StackLayout>
            </v-template>
        </ListView>
    </StackLayout>
</template>

<script>
  export default {
    data() {
      return {
        images: [
          { src: 'https://art.nativescript-vue.org/NativeScript-Vue.png', alt: 'img1' },
          { src: 'https://art.nativescript-vue.org/NativeScript-Vue-Inverted.png', alt: 'img2' },
          { src: 'https://art.nativescript-vue.org/NativeScript-Vue-Black.png', alt: 'img3' },
        ]
      }
    }
  }
</script>
