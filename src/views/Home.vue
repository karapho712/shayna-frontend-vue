<template>
  <div class="home">
    <HeaderShayna />
    <Hero />
    <Hitsproduct />
    <InstagramPhoto />
    <Logos />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderShayna from '@/components/HeaderShayna.vue'
import Hero from '@/components/Hero.vue'
import Hitsproduct from '@/components/Hitsproduct'
import InstagramPhoto from '@/components/InstagramPhoto'
import Logos from '@/components/Logos'
import Footer from '@/components/Footer'

// import carousel from 'vue-owl-carousel'



export default {
  name: 'Home',
  components: {
    // HelloWorld
    HeaderShayna,
    // carousel,
    Hero,
    Hitsproduct,
    InstagramPhoto,
    Logos,
    Footer
  }
}
</script>
