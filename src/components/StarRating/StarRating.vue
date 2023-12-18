    <template>
        <div class="shop_list_info_star">
          <img v-for="i in 5" :src="getImage(i)" :key="i" class="shop_list_info_img" alt="" srcset="">
        </div>
    </template>
    
    <script>
  
      export default {
        name: "StarRating",
        data() {
          return {
            starFull: require("../../static/image/starfull.png"),
            starHalf: require("../../static/image/starhalf.png"),
            starNone: require("../../static/image/starnone.png"),
          };
        },
        mounted(){

        },
        methods: {
          getImage(index) {
              if (index <= Math.floor(this.rating)) {
                return this.starFull;
              } else if (this.rating + 0.5 >= index) {
                return this.starHalf;
              } else {
                return this.starNone;
              }
            }
        },
        props:{
          rating : Number
        }
      };

    </script>

    <style scoped>

        .shop_list_info_star {
          padding: 3px;
        }
        .shop_list_info_img {
        max-width: 15px;
    }
    </style>