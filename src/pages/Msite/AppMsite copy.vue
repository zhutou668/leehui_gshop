<template>
    <div class="AppMsite">
      <AppHeaderTop :title="address.address">
      <span class="header_left" slot="header_left"><font-awesome-icon icon="fa-solid fa-magnifying-glass" size:50px/></span>
      <span class="header_right" slot="header_right">登录/注册</span>
      </AppHeaderTop>
      <div class="Msite_Menu">
         <div class="swiper">
            <div class="swiper-wrapper">
               <div class="swiper-slide">Slide 1</div>
               <div class="swiper-slide">Slide 2</div>
               <div class="swiper-slide">Slide 3</div>
            </div>
            <div class="swiper-pagination"></div>
         </div>
       </div>
   </div>
  </template>
  
  <script>
   
   import {mapActions} from 'vuex'
   import {mapState} from 'vuex'
   import AppHeaderTop from "../../components/HeaderTop/AppHeaderTop.vue"

   import Swiper from 'swiper'
   import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper/core';
   import 'swiper-bundle/swiper-bundle.min.css';
   SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



   export default {
      name: 'AppMsite',
      components:{
         AppHeaderTop
      },
       mounted() {
      //   this.$store.dispatch('getPosts')
      //   console.log(this.posts)
      // this.$store.dispatch('getProfile')	
      this.getCatergorys();
      this.getAddress();  

         new Swiper ('.swiper', {
                  loop:  true,
                  pagination: {
                     el: '.swiper-pagination',
                  },
                  })        
               },

      methods: {
         ...mapActions(['getCatergorys','getAddress']),

      },
      computed: {
         ...mapState(['address','catergorys'])
      }
   }
 
  </script>
  
  <style scoped>
  
  /* Các quy tắc CSS cho component này */
  .swiper {
    --swiper-theme-color: #ff6600;
    --swiper-pagination-color: #00ff33;
  }
  
  .swiper-slide {
    color: #000;
    min-height: 100px;
  }
  
  .swiper-pagination {
    color: #00ff33;
    line-height: 10px;
  }
  </style>
  