<template>
  <div id="app">
    <router-view/>
    <div class="foot">
      <p>Made with <i class="fas fa-heart"></i> and <i class="fab fa-vuejs"></i> by <a href="https://github.com/shivanshvij">Shivansh Vij</a></p>
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
    height: 2600px;
    /* height: min-content; */
  }

  body, html {
    overflow-x: hidden;
    overflow-y: hidden;
  }

  @media only screen and (max-width: 1100px) {
    #app {
      height: 3000px;
    }
  }

  @media only screen and (max-width: 850px) {
    #app {
      height: 3200px;
    }
  }

  @media only screen and (max-width: 750px) {
    #app {
      height: 3500px;
    }
  }

  @media only screen and (max-width: 639px) {
    #app {
      height: 2700px;
    }
  }

  @media only screen and (max-width: 530px) {
    #app {
      height: 2900px;
    }
  }

  @media only screen and (max-width: 475px) {
    #app {
      height: 3000px;
    }
  }

  @media only screen and (max-width: 450px) {
    #app {
      height: 3100px;
    }
  }

  @media only screen and (max-width: 400px) {
    #app {
      height: 3200px;
    }
  }

  @media only screen and (max-width: 390px) {
    #app {
      height: 3300px;
    }
  }

  @media only screen and (max-width: 360px) {
    #app {
      height: 3900px;
    }
  }

.foot {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: white;
  color: black;
  text-align: center;
  z-index: 100;
  font-weight: 600;
}

</style>
