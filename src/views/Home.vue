<template>

  <div class="home">
    <div id='particles-js' class="particle-background"></div>
    <div class="columns is-mobile">
      <div class="column is-1"></div>
      <div class="column is-10">
        <section>
          <div class="terminal">
            <div class="terminal-header">
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="terminal-body">
              <pre class="has-background-dark">
                <code class="terminal-code">
                  # Run Code
                  $ npm run dev
                  $ npm run the streets
                </code>  
              </pre>    
            </div>
          </div>
        </section>
      </div>
      <div class="column is-1"></div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'home',
  components: {
  },
  data () {
    return {

    }
  },
  mounted () {
    require('particles.js')
    this.$nextTick(() => {
      this.initParticlesJS()
    })
  },
  methods: {
    initParticlesJS () {
      /* eslint-disable */
      particlesJS('particles-js',
      {
        "particles": {
          "number": {
            "value": 60,
            "density": {
              "enable": true,
              "value_area": 1122.388442605866
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "polygon",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 6
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 1,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0,
              "sync": false
            }
          },
          "size": {
            "value": 2,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 4.872463273808071,
              "size_min": 0.3,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#c8daf0",
            "opacity": 1,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1.5,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 600
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "bubble"
            },
            "onclick": {
              "enable": false,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 250,
              "size": 0,
              "duration": 2,
              "opacity": 0,
              "speed": 3
            },
            "repulse": {
              "distance": 400,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      })
    }
  }
}

</script>

<style scoped>

  .home {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -2;
  }

  .column section {
    margin-top: 100px;
  }

  .particle-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: -1;
  }

  .terminal {
    z-index: 0;
    display: block;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.5) 0 14px 45px;
    width: 100%;
    margin: 0;
  }

  .terminal-header {
    background: #e2e2e2;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    width: 100%;
    text-align: left;
  }

  .terminal-header ul, .terminal-header li {
    display: inline-block;
  }
  .terminal-header ul {
    margin: 6px 0 6px 0;
    padding-left: 15px;
  }
  .terminal-header ul li {
    width: 12px;
    height: 12px;
    margin-right: 2px;
    border-radius: 50%;
  }
  .terminal-header ul li:first-child {
    background-color: #ff6059;
    box-shadow: inset 0px 0px 1px #000;
  }
  .terminal-header ul li:nth-child(2) {
    background-color: #ffbd2e;
    box-shadow: inset 0px 0px 1px #000;
  }
  .terminal-header ul li:last-child {
    background-color: #29ca42;
    box-shadow: inset 0px 0px 1px #000;
  }

  .terminal-body {
    background: #333;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    height: 20rem;
    width: 100%;

  }
  .terminal-body pre {
    line-height: 2;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    -moz-tab-size: 4;
      -o-tab-size: 4;
         tab-size: 4;
    color: #f0f0f0;
    height: 20rem;
    width: 100%;
    margin: 0;
    padding: 0;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  .terminal-code{

  }

</style>