<template>
  <div class="main">
    default:<br>
    width => 100px-200px ;<br>
    height => 100px-200px;<br>
    color = white-red;<br>
    background => a.png-b.png;<br>
    transform =>rotate(360deg);<br>
    all 2s linear 200ms<br>
    <ul class="left_select">
      <li>
        <select v-model="model.attribute" name="category" id="category" @change="changeAttribute">
          <option v-for="(item,index) in listAttribute" :value="item">{{ item }}</option>
        </select>
      </li>
      <li>
        <select v-model="model.duration" name="category" id="category" @change="changeAttribute">
          <option v-for="(item,index) in listDuration" :value="item">{{ item }}</option>
        </select>
      </li>
      <li>
        <select v-model="model.func" name="category" id="category" @change="changeAttribute">
          <option v-for="(item,index) in listFunc" :value="item">{{ item }}</option>
        </select>
      </li>
      <li>
        <select v-model="model.delay" name="category" id="category" @change="changeAttribute">
          <option v-for="(item,index) in listDelay" :value="item">{{ item }}</option>
        </select>
      </li>
    </ul>
    <ul class="right_exam">
      <li>
        <div class="block" id='transtions'>
          beautiful ...
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
      model: { 'attribute': 'width', 'duration': '2s','func':'linear','delay':'500ms' },
      listAttribute: ['width', 'height', 'background', 'transform', 'color'],
      listDuration: ['2s', '1s', '500ms'],
      listFunc: ['linear', 'ease', 'ease-in','ease-out','ease-in-out'],
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

.main {
  width: 100%;
  overflow: hidden;
  .left_select {
    float: left;
    width: 40%;
  }
  .right_exam {
    float: left;
    width: 60%;
  }
}


ul.right_exam {
  li {
    margin: 5px;
    .block {
      width: 100px;
      height: 100px;
      background: url(https://sjbz-fd.zol-img.com.cn/t_s320x510c/g5/M00/00/04/ChMkJlfJWJuId5goAASpWt4R6n8AAU-KQJT6UsABKly959.jpg) no-repeat center 0;
      background-size: cover;
      text-align: center;
      vertical-align: middle;
      line-height: 100px;
      color: white;
      transition: all 2s linear 200ms; // 过度
      &:hover {
        color: red;
        width: 200px;
        height: 200px;
        line-height: 200px;
        transform: rotate(360deg);
        background: url(https://sjbz-fd.zol-img.com.cn/t_s320x510c/g5/M00/00/04/ChMkJlfJWHuIOg2SAAQZoLX5wXMAAU-JwKjRZYABBm4920.jpg) no-repeat center 0;
      }
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
