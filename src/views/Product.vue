<template>
  <div class="product">
    <HeaderShayna  />
    <Breadcrumb />
    <ProductShop />
    <RelatedProduct />
    
    
    
    
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderShayna from '@/components/HeaderShayna.vue'
// import Hero from '@/components/Hero.vue'
// import Hitsproduct from '@/components/Hitsproduct'
// import InstagramPhoto from '@/components/InstagramPhoto'
// import Logos from '@/components/Logos'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import ProductShop from '@/components/ProductShop'
import RelatedProduct from '@/components/RelatedProduct'

// import carousel from 'vue-owl-carousel'


export default {
  name: 'product',
  components: {
    // HelloWorld
    HeaderShayna,
    Breadcrumb,
    ProductShop,
    RelatedProduct,
    // carousel,
    Footer
    
  }
  
}
</script>
