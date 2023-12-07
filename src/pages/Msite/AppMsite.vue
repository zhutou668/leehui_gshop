<template>
   <div class="AppMsite">
     <AppHeaderTop :title="address.address">
     <span class="header_left" slot="header_left"><font-awesome-icon icon="fa-solid fa-magnifying-glass" size:50px/></span>
     <router-link class="header_right" to="/applogin" slot="header_right">登录/注册</router-link>
     </AppHeaderTop>
     <MenuSlide></MenuSlide>
     <ShopList>

     </ShopList>
  </div>
 </template>
 
 <script>
  
  import {mapActions} from 'vuex'
  import {mapState} from 'vuex'
  import AppHeaderTop from "../../components/HeaderTop/AppHeaderTop.vue"
  import MenuSlide from '../../components/MenuSlide/MenuSlide.vue'
  import ShopList from '../../components/ShopList/ShopList.vue'



  export default {
     name: 'AppMsite',
     components:{
        AppHeaderTop,
        MenuSlide,
        ShopList
     },
      mounted() {
     //   this.$store.dispatch('getPosts')
     //   console.log(this.posts)
     // this.$store.dispatch('getProfile')	
     
     this.getCatergorys();
     this.getAddress(); 

      },

     methods: {
        ...mapActions(['getCatergorys','getAddress']),

     },
     computed: {
        ...mapState(['address','catergorys']),
     }
  }

 </script>
 
 <style scoped>
 
   .AppMsite {
      margin-bottom: 52px;
      font-size: 14px;
   }


 


 </style>
 