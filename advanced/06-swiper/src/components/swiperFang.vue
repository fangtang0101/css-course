<!-- https://github.com/surmon-china/vue-awesome-swiper -->
<!-- https://surmon-china.github.io/vue-awesome-swiper/ -->
<template>
  <div>
    <swiper :options="swiperOption" class="swiper-box">
      <swiper-slide>
        <div class="page_all"><img :src="url"></div>
      </swiper-slide>
      <swiper-slide>
        <div class="page_all"><img :src="url"></div>
      </swiper-slide>
      <swiper-slide>
        <div class="page_all"><img :src="url"></div>
      </swiper-slide>
      <swiper-slide>
        <div class="page_all"><img :src="url"></div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
// import Swiper from 'vue-swiper'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  name: 'sw',
  data() {
    return {
      // url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525670746457&di=ee3a429c99d08fe3cca6c1531d724e79&imgtype=0&src=http%3A%2F%2Fpic2016.ytqmx.com%3A82%2F2016%2F1229%2F18%2F5.jpg%2521960.jpg',
      url: 'http://wmimg.sc115.com/phone/pic/0729/1607fiuoa03dge2.jpg',

      msg: 'Welcome to Your Vue.js App',

      swiperOption: {
        direction: 'vertical',
        height : window.innerHeight,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
#app {
  margin: 0 !important;
}
.page_all {
  
  // img {
  //   width: 100 vw;
  // height: 100 vh;
  // }
}

html, 
body, 
.swiper-container, 
.swiper-slide { 
height: 100%; 
} 



h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}




</style>
