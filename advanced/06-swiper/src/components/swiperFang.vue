<!-- https://github.com/surmon-china/vue-awesome-swiper -->
<!-- https://surmon-china.github.io/vue-awesome-swiper/ -->
<template>
  <div>
    <swiper :options="swiperOption" class="swiper-box">
      <swiper-slide>
        <div class="page_all_one page_all">page one</div>
      </swiper-slide>
      <swiper-slide>
        <div class="page_all_two page_all">page two</div>
      </swiper-slide>
      <swiper-slide>
        <div class="page_all_three page_all">page three</div>
      </swiper-slide>
      <swiper-slide>
        <div class="page_all_four page_all">page four</div>
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
      url: 'http://wmimg.sc115.com/phone/pic/0729/1607fiuoa03dge2.jpg',
      msg: 'Welcome to Your Vue.js App',
      swiperOption: {
        direction: 'vertical',
        height: window.innerHeight,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}

// https://sjbz-fd.zol-img.com.cn/t_s320x510c/g5/M00/08/0A/ChMkJliEUgWIWzw0AAQmOu8l33oAAZe7gPdxW0ABCZS129.jpg
// https://sjbz-fd.zol-img.com.cn/t_s320x510c/g5/M00/00/04/ChMkJlfJWJuId5goAASpWt4R6n8AAU-KQJT6UsABKly959.jpg
// https://sjbz-fd.zol-img.com.cn/t_s320x510c/g5/M00/00/04/ChMkJlfJWHuIOg2SAAQZoLX5wXMAAU-JwKjRZYABBm4920.jpg

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
#app {
  margin: 0 !important;
}


html,
body,
.swiper-container,
.swiper-slide {
  height: 100%;
}

body {
  margin: 0;
}

.swiper-slide {
  .page_all {
    width: 100%;
    height: 100%;
    background-color: red;
    // text-align: center;
    // vertical-align: middle;
    color: white;
  }

  .page_all_one {
    background-color: red;
    background: url(https://sjbz-fd.zol-img.com.cn/t_s320x510c/g5/M00/08/0A/ChMkJliEUgWIWzw0AAQmOu8l33oAAZe7gPdxW0ABCZS129.jpg) no-repeat center 0;
    background-size: cover;
  }
  .page_all_two {
    background-color: #efefef;
    background: url(https://sjbz-fd.zol-img.com.cn/t_s320x510c/g5/M00/00/04/ChMkJlfJWJuId5goAASpWt4R6n8AAU-KQJT6UsABKly959.jpg) no-repeat center 0;
    background-size: cover;
  }
  .page_all_four {
    background-color: red;
    background: url(https://sjbz-fd.zol-img.com.cn/t_s320x510c/g5/M00/00/04/ChMkJlfJWHuIOg2SAAQZoLX5wXMAAU-JwKjRZYABBm4920.jpg) no-repeat center 0;
    background-size: cover;
  }
  .page_all_three {
    background-color: #efefef;
    background: url(http://wmimg.sc115.com/phone/pic/0729/1607fiuoa03dge2.jpg) no-repeat center 0;
    background-size: cover;
  }

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
