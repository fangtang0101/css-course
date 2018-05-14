import Vue from 'vue'
import Router from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import HelloWorld from '@/components/HelloWorld'
import Swiper from '@/components/swiperFang'


Vue.use(Router)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Swiper',
      component: Swiper
    }
  ]
})
