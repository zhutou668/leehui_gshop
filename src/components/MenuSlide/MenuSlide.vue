<template>
<div class="Menu_Slide">
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <div class="MenuSlide_item_box">
                <a href="#" v-for="n in 8" :key="n" class="Msite_Menu_item" >
                     <img :src="slideImage" class="Msite_menu_image" alt="" srcset="">
                      <p class="Msite_menu_title">
                     {{slideTitle}} {{n}}
                      </p>
                </a>
            </div>
        </div>
        <div class="swiper-slide">Slide 2</div>
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


export default {
    name: "MenuSlide",
    props:{
            slideImage: String,
            slideTitle: String

        },

    mounted(){
        new Swiper('.swiper-container', {
         loop: true,
         
         pagination: {
            el: '.swiper-pagination',
            },

         });
        //  console.log(this.slideImage)
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