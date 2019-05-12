<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
    </div> -->
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
  height: 100%;
  width: 100%;
}
#particles-js {
  width: 100%;
  height: 100%;
  background: #090a11;
  z-index: 0;
}

body, html { 
  overflow-x: hidden; 
  overflow-y: auto;
}

</style>
