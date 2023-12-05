<template>
    <div class="Appsearch">
        <AppHeaderTop title="搜索">
        </AppHeaderTop>
        <form class="Appsearch_form" action="">
            <input class="Appsearch_input" type="text" placeholder="请输入关键词。。。">
            <span class="Appsearch_button">提交</span>
        </form>
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
    .Appsearch_form {
        padding: 5px;
        display: flex;
        margin: 5px 0 ;

    }

    .Appsearch_input {
        height: 25px;
        flex: 1;
        border-radius: 4px;
        
    }

    .Appsearch_input:focus {
        outline: none;
        border: 2px solid green;
    }

    .Appsearch_button {
        width: 20%;
        text-align: center;
        line-height: 31px;
        color: #fff;
        background-color: green;
        margin-left: 5px;
        border-radius: 5px;
    }
</style>