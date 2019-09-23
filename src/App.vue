<template>
  <div id="app">
    <router-view/>
    <div class="foot">
      <p>Footer</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Oxygen&display=swap');
  #app {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: #090a11;
    position: relative;
    z-index: 0;
    height: 2400px;
    /* height: min-content; */
  }

  body, html {
    overflow-x: hidden;
    overflow-y: hidden;
  }

  @media only screen and (max-width: 1100px) {
    #app {
      height: 2800px;
    }
  }

  @media only screen and (max-width: 710px) {
    #app {
      height: 3000px;
    }
  }

  @media only screen and (max-width: 639px) {
    #app {
      height: 2400px;
    }
  }

  @media only screen and (max-width: 490px) {
    #app {
      height: 2700px;
    }
  }

  @media only screen and (max-width: 400px) {
    #app {
      height: 2900px;
    }
  }

  @media only screen and (max-width: 340px) {
    #app {
      height: 3200px;
    }
  }

.foot {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  /* max-height: 20px; */
  background-color: red;
  color: white;
  text-align: center;
  z-index: 100;
}

</style>
