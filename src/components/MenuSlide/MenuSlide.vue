<template>
<div class="Menu_Slide">
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="a in catergorys.length" :key="a">
            <div class="MenuSlide_item_box">
                <a href="#" v-for="catergory in catergorys[a - 1 ]" :key="catergory.id" class="Msite_Menu_item" >
                     <img :src="Base_URL(catergory.image_url) "   class="Msite_menu_image" alt="" srcset="">
                      <p class="Msite_menu_title">
                     {{catergory.title}}
                      </p>
                </a>
            </div>
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
</div>

</template>

<script>


import Swiper from 'swiper';
  // import Swiper styles

import 'swiper/dist/css/swiper.min.css';
import { mapState } from 'vuex';


export default {
    name: "MenuSlide",
    data(){
      return {
         
      }
     },
     methods: {
      Base_URL (URl) {
        const Base = require(`../../static/image/${URl}`) 
          return Base
        }
     },     
    computed: {
        ...mapState(['catergorys']),

     },
     watch: {
        catergorys(value) {
          console.log(value)
          this.$nextTick(()=>{ 
          new Swiper('.swiper-container', {
          loop: true,
          
          pagination: {
              el: '.swiper-pagination',
              },
 
          });
        })
        }
     }
}
</script>

<style scoped>

    .Menu_Slide {
        padding: 5px;
    }
 .Msite_menu_box {
   display: flex;
   flex-wrap: wrap;
   align-content: space-around ;
 }
 .MenuSlide_item_box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
 }

 .Msite_Menu_item {
   width: 23%;
   display: block;
   text-align: center;
   margin: 3px;
   text-decoration: none;
   color: #000;
 }

 .Msite_menu_image {
   max-width: 40px;
 }

 .Msite_menu_image img{
   width: 40px;
 }

 .Msite_menu_title {
   margin: 0;
   font-size: 14px;
 }


 
</style>