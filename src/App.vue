<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>

  #app {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: #090a11;
    position: relative;
    z-index: -3;
    height: 100vh;
  }

  body, html {
    overflow-x: hidden;
    overflow-y: hidden;
  }

</style>
