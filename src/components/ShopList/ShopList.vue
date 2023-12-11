<template>
    <div class="shop_list_box">
        <div class="shop_list_header">
            <font-awesome-icon :icon="['fas', 'bars']" />
            <p class="shop_list_header_title">附近商家</p>
        </div>
        <div class="shop_list" v-for="shop in shops" :key="shop.id">
        <div class="shop_img">
            <img :src="imgBaseUrl(shop.image_path)" alt="" srcset="">
        </div>
        <div class="shop_list_content_header">
            <div class="shop_list_info">
            <p class="shop_list_info_title">
                <span class="shop_list_info_subtitle">品牌</span>
                {{shop.name}}
            </p>
            <p class="shop_list_info_evaluate">
                <StarRating :rating="shop.rating"/>
                <span class="shop_list_info_vote">{{shop.rating}}</span>
                <span class="shop_list_info_sell">月售{{shop.recent_order_num}}单</span>
            </p>
            <p class="shop_list_info_condition">
                <span class="shop_list_info_minium">&#165;{{shop.float_minimum_order_amount}}起送/配送费均&#165;{{shop.float_delivery_fee}}</span>
            </p>
            </div>
            <div class="shop_list_mark">
                <p class="shop_list_mark_title">
                    <span class="shop_list_mark_text" v-for="(support,index) in shop.support" :key="index">{{support.icon_name}}</span>
                </p>
                <p class="shop_list_mark_title">
                    <span class="shop_list_mark_content">{{shop.delivery_mode.text}}</span>
                </p>
            </div>
        </div>

        </div>
    </div>

</template>

<script>
import { mapState } from 'vuex'
import StarRating from "../StarRating/StarRating.vue"

export default {
    name:'ShopList',
    computed: {
        ...mapState(['shops'])
    },
    components:{
        StarRating
    },

    methods: {
        imgBaseUrl (URl) {
            const imgPath = require(`../../static/shopImage/${URl}`) 
          return imgPath
        }
    }
}
</script>

<style scoped>

    p {
        margin: 0;
    }

    .shop_list_box{
        padding: 0 5px;
    }

    .shop_list_header {
        display: flex;
        align-items: center;
        margin: 5px 0;
        color: darkgrey;
    }

    .shop_list_header_title {
        padding: 0;
        margin: 0 5px;
        font-size: 16px;
        font-weight: bold;
    }

     .shop_list {
        display: flex;
        align-content: space-around;
        padding: 8px 5px;
        max-width: 100%;
        overflow: hidden;
        justify-content: space-between;
    }
    .shop_img {
        max-width: 23%;
    }
    .shop_img img{
        max-width: 60px;
    }

    .shop_list_content_header {
        flex: 1;
        display: flex;
        max-width: 80%;
        justify-content: space-between;
    }

    .shop_list_info {
        flex: 1;
        max-width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    
    .shop_list_info_subtitle{
        background-color: yellow;
        font-size: 14px;
        padding: 3px;
    }

    .shop_list_info_title {
        /* word-break: keep-all; */
        overflow: hidden;
        word-break: keep-all;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: bold;
    }

    .shop_list_mark {
        max-width: 28%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .shop_list_mark_title {
        overflow: hidden;
        word-break: keep-all;
        white-space: nowrap;
        /* text-overflow: ellipsis; */
    }
    .shop_list_mark_text {
        margin: 3px;
    }

    .shop_list_info_evaluate {
        display: flex;
        align-items: center;
    }

    .shop_list_info_img {
        max-width: 15px;
    }
    .shop_list_info_vote {
        padding: 3px;
        font-size: 14px;
        color: #ffd100;
        
    }

    .shop_list_mark_content {
        color: #57A9FF;
    }


</style>