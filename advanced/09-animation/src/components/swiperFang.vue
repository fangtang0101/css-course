<!-- http://www.webhek.com/post/40-css-shapes.html -->
<template>
  <div class="main">
    <ul>
      <li class="animation1">
        <div class="circle">
          <div id="triangle-down">
          </div>
        </div>
      </li>
    </ul>
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
      model: { 'attribute': 'width', 'duration': '2s', 'func': 'linear', 'delay': '500ms' },
      listAttribute: ['width', 'height', 'background', 'transform', 'color'],
      listDuration: ['2s', '1s', '500ms'],
      listFunc: ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'],
      listDelay: ['2s', '1s', '500ms']
    }
  },
  mounted() {},
  methods: {
    changeAttribute() {
      console.log('changeAttribute ...', this.model.attribute);
      this.doTransiton();
    },
    doTransiton() {
      let style = document.getElementById("transtions").style;
      // style.transition="width 500ms ease-out";
      // style.transition="width 2s linear 200ms";
      style.transition = `${this.model.attribute} ${this.model.duration} ${this.model.func} ${this.model.delay}`;
      console.log('style.transition ...', style.transition);
    }
  },
}

</script>
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

select {
  margin-bottom: 50px;
}

@keyframes loading {
  // show-front
  0%,
  100% {
    transform: rotate( 360deg);
  } // show-back
  16.5% {
    transform: rotate( 70deg);
  } // show-left
  33% {
    transform: rotate( 120deg);
  } // show-right
  49.5% {
    transform: rotate( 180deg);
  } // show-top
  66% {
    transform: rotate( 240deg);
  } // show-bottom 
  82.5% {
    transform: rotate( 290deg);
  }
}


ul {
  li {
    margin: 5px;
    .circle {
      width: 100px;
      height: 100px;
      background-color: white;
      border: 4px solid blue;
      border-radius: 50%;
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
    }
    #triangle-down {
      width: 0;
      height: 0;
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      border-top: 120px solid red;
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      border-radius: 50%;
      animation: loading 5s infinite;
      -webkit-animation: loading 5s infinite;
      /* Safari 和 Chrome */
    }
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
