<template>
  <div class="header">
    <slot name="header_left"></slot>
    <span class="hedear_title">{{title}}</span>
    <slot name="header_right"></slot>
  </div>
</template>

<script>
    export default {
        name:'AppHeaderTop',
        props:{
            title: String
        }
    }
</script>

<style scoped>
  .header{
    display: flex;
    flex-wrap: none;
    height: 40px;
    background-color: green;
    justify-content: space-around;
    color: aliceblue;
  }

  .hedear_title,.header_left {
    padding: 5px;
    flex: 1;
  }
  
  .hedear_title{
    line-height: 30px;
    text-align: center;
    flex: 2;
  }

  .header_left {
    display: block;
    line-height: 30px;
    max-width: 50px;
    text-align: center;
  }
  .header_right {
    display: block;
    padding: 5px;
    line-height: 30px;
    text-decoration: none;
    color: aliceblue;
  }

 

  

</style>