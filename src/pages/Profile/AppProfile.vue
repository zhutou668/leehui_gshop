<template>
    <div class="profile_page">
        <AppHeaderTop title="我的">
        </AppHeaderTop>
        <div class="profile_login_box">
            <router-link to="/applogin" class="profile_login">
                <img src="../../static/image/profile.png" class="profile_login_img" alt="" srcset="">
                <div class="profile_login_content">
                    <p class="profile_login_title">
                        登录/注册
                    </p>
                    <p class="profile_login_subtitle">
                        <font-awesome-icon :icon="['fas', 'mobile-screen-button']" />
                        暂无绑定手机号
                    </p>
                </div>
                <div class="profile_login_goto">
                    <font-awesome-icon :icon="['fas', 'chevron-right']" /> 
                </div>
            </router-link>
        </div>
        <div class="profile_balance_box">
            <div class="profile_mybalance">
                <p class="profile_mybalance_box">
                    <span class="profile_mybalance_num">0.00</span> 
                    元
                </p>
                <p class="profile_mybalance_title">
                    我的余额
                </p>
            </div>
            <div class="profile_discount">
                <p class="profile_discount_cont">
                    <span class="profile_discount_num">0</span>
                     个
                </p>
                <p class="profile_discount_title">
                    我的优惠
                </p>
            </div>
            <div class="profile_discountPoints">
                <p class="profile_discountPoints_box">
                    <span class="profile_discountPoints_num">
                        0
                    </span>
                    积分
                </p>
                <p class="profile_discountPoints_title">
                    我的积分
                </p>
            </div>
        </div>
        <div class="profile_infomation_box">
            <div class="profile_infomation_order">
                <p class="profile_order_title">
                    <font-awesome-icon class="profile_left_icon" :icon="['fas', 'table']" />
                    <span class="profile_order_text">我的订单</span>
                    <font-awesome-icon class="profile_right_icon" :icon="['fas', 'chevron-right']" /> 
                </p>
            </div>
            <div class="profile_discount_shop">
                <p class="profile_discout_box">
                    <font-awesome-icon class="profile_left_icon" :icon="['fas', 'briefcase']" />
                    <span class="profile_discount_text">积分商城</span>
                    <font-awesome-icon class="profile_right_icon" :icon="['fas', 'chevron-right']" /> 
                </p>
            </div>
            <div class="profile_membership_card">
                <p class="profile_membership_box">
                    <font-awesome-icon class="profile_left_icon" :icon="['fas', 'medal']" />
                    <span class="profile_membership_text">外卖会员卡</span>
                    <font-awesome-icon class="profile_right_icon" :icon="['fas', 'chevron-right']" /> 

                </p>
            </div>
            <div class="profile_service">
                <p class="profile_service_box">
                    <font-awesome-icon class="profile_left_icon" :icon="['fas', 'building']" />
                    <span class="profile_service_text">服务中心</span>
                    <font-awesome-icon class="profile_right_icon" :icon="['fas', 'chevron-right']" /> 

                </p>
            </div>
        </div>
    </div>

 </template>
    
 <script>
       import AppHeaderTop from "../../components/HeaderTop/AppHeaderTop.vue"
     export default {
         name:'AppProfile',
         components:{
             AppHeaderTop
         }
     }
 </script>
    
<style scoped>
    p {
        margin: 0;
    }

    .profile_page {
        background-color:#ced5ce;
    }
   
    .profile_login {
        margin: 1px 0;
        background-color: green;
        display: flex;
        padding: 6px;
        align-items: center;
        text-decoration: none;
    }

    .profile_login_img {
        max-width: 80px;
        border-radius: 50%;
        padding: 3px;
    }

    .profile_login_content {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 5px;
    }

    .profile_login_title,.profile_login_subtitle {
        color: aliceblue;
    }

    .profile_login_goto {
        color: aliceblue;
        width: 20px;
    }

    .profile_mybalance {
        text-align: center;
        flex: 1;
        border-right: 1px solid #b3b9be;
    }

    .profile_balance_box {
        padding: 5px;
        margin: 2px 0;
        display: flex;
        background-color: white;
        justify-content: space-around;
        
    }

    .profile_mybalance_num {
        color: rgb(255, 157, 0);
        font-weight: bold;
        font-size: 20px;
        flex: 1;
    }
    .profile_discount {
        flex: 1;
        text-align: center;
        border-right: 1px solid #b3b9be;
    }

    .profile_discount_num {
        font-weight: bold;
        font-size: 20px;
        color: #fa810b;
    }

    .profile_discountPoints {
        flex: 1;
        text-align: center;
    }

    .profile_discountPoints_num {
        font-weight: bold;
        font-size: 20px;
        color: #5bca53;
    }

    .profile_infomation_order {
        background-color: white;
        margin: 2px 0;
    }

    .profile_right_icon {
        margin: 0 5px;
        color: #b3b9be;
    }

    .profile_left_icon {
        margin: 0 5px;
    }

    .profile_discout_box, .profile_service_box ,.profile_membership_box,.profile_order_title{
        background-color: white;
        display: flex;
        flex-wrap: nowrap;
        padding: 5px;
        margin: 2px 0;
        line-height: 35px;
        align-items: center;
    }

    .profile_discount_text,.profile_membership_text ,.profile_service_text ,.profile_order_text {
        flex: 1;
    }


 </style>