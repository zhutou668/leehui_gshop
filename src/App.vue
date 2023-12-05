<template>
  <div id="app">
    <router-view/>
    <FooterGuideline/>
  </div>
</template>

<script>

 import FooterGuideline from "./components/FooterGuide/FooterGuideline.vue"


export default {
  name:'App',
  components: {
    /* eslint-disable */
    FooterGuideline
  }
}
</script>

<style>
  #app {
    width: 100%;
  }

  body {
    margin: 0;
  }

</style>
