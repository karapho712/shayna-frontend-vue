import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import Success from '../views/Success.vue'
// import Product from '../views/Product.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/product/:id',
    props: true,
    name: 'product',
    component: () => import('../views/Product.vue')
    // component: Product
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShoppingCart
    // component: Product
  },
  {
    path: '/success',
    name: 'success',
    component: Success
    // component: Product
  },
]

const router = new VueRouter({
  routes,

  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
  
  // What you previously had here, such as routes

  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 };
  // }

})

export default router
