<template>

  <div class="home">
    <div id='particles-js' class="particle-background"></div>
    <div class="columns is-mobile">
      <div class="column is-1"></div>
      <div class="column is-10">
        <div class="picture">
          <svg v-if="mask" class="svg_outline" version="1.1" xmlns="http://www.w3.org/2000/svg" width="160" height="139" viewbox="0 0 160 138.56406460551017" >
            <g fill="rgba(255, 255, 255, 0)" fill-rule="evenodd" stroke="white" stroke-width="0.2" class="svg_outline">
              <path stroke-dasharray="78.382080078125" style="stroke-dashoffset: 0px; fill: rgb(255, 255, 255);" fill="#000" d="M6.500000000000002 80.54036255195278Q0 69.28203230275508 6.500000000000002 58.023702053557386L33.5 11.258330249197702Q40 0 53 0L107 0Q120 0 126.5 11.258330249197702L153.5 58.023702053557386Q160 69.28203230275508 153.5 80.54036255195278L126.5 127.30573435631247Q120 138.56406460551017 107 138.56406460551017L53 138.56406460551017Q40 138.56406460551017 33.5 127.30573435631247Z">
              </path>
            </g>
          </svg>
          <svg v-if="!mask" class="hex_svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="160" height="139" viewbox="0 0 160 138.56406460551017">
            <defs>
              <clipPath id="hexagonal-mask">
                <path d="M6.500000000000002 80.54036255195278Q0 69.28203230275508 6.500000000000002 58.023702053557386L33.5 11.258330249197702 Q40 0 53 0L107 0Q120 0 126.5 11.258330249197702L153.5 58.023702053557386Q160 69.28203230275508 153.5 80.54036255195278L126.5 127.30573435631247Q120 138.56406460551017 107 138.56406460551017L53 138.56406460551017Q40 138.56406460551017 33.5 127.30573435631247Z">
                </path>
              </clipPath>
            </defs>
            <image clip-path="url(#hexagonal-mask)" width="160px" height="160px"  xlink:href="/img/shivanshvij.jpg" />
          </svg>
        </div>
        <div id="letters">
          <div id="S1">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100">
              <g fill="rgba(255, 255, 255, 0)" fill-rule="evenodd" stroke="white" stroke-width="0.2" class="lines">
                <path id="path" d="m 57.591171,18.500793 q 1.7272,0 2.5146,-0.5842 0.7874,-0.5842 0.7874,-1.651 0,-0.635 -0.2794,-1.0922 -0.254,-0.4572 -0.762,-0.812799 -0.4826,-0.381 -1.1938,-0.6858 -0.7112,-0.3302 -1.6256,-0.635 -0.9144,-0.3302 -1.778,-0.7112 -0.8382,-0.4064 -1.4986,-0.9906 -0.635,-0.5842 -1.0414,-1.3970004 -0.381,-0.8128 -0.381,-1.9558 0,-2.3876 1.651,-3.7337999 1.651,-1.3716 4.4958,-1.3716 1.651,0 2.921,0.381 1.2954,0.3556 2.032,0.7874 l -0.9906,2.5907999 q -0.8636,-0.4826 -1.905,-0.7366 -1.016,-0.254 -2.1082,-0.254 -1.2954,0 -2.032,0.5334 -0.7112,0.5334 -0.7112,1.4986 0,0.5842 0.2286,1.016 0.254,0.4064 0.6858,0.7366 0.4572,0.3302 1.0414,0.6096004 0.6096,0.2794 1.3208,0.5334 1.2446,0.4572 2.2098,0.9398 0.9906,0.4572 1.651,1.1176 0.6858,0.635 1.0414,1.524 0.3556,0.863599 0.3556,2.108199 0,2.3876 -1.7018,3.7084 -1.6764,1.2954 -4.9276,1.2954 -1.0922,0 -2.0066,-0.1524 -0.889,-0.127 -1.6002,-0.3302 -0.6858,-0.2032 -1.1938,-0.4064 -0.508,-0.2286 -0.8128,-0.4064 l 0.9398,-2.6162 q 0.6858,0.381 1.8542,0.762 1.1684,0.381 2.8194,0.381 z" stroke-dasharray="78.382080078125" style="stroke-dashoffset: 0px; fill: rgb(255, 255, 255);"></path>
              </g>
            </svg>
          </div>
          <div id="h1">
            <svg viewBox="0 0 100 100" width="200" height="200">
              <g fill="rgba(255, 255, 255, 0)" fill-rule="evenodd" stroke="white" stroke-width="0.2" class="lines">
                <path id="path" d="M 16.602378,24.053944 V 4.8515439 l 3.0734,-0.508 v 6.5786001 q 0.508,-0.1778 1.1684,-0.3048 0.6858,-0.127 1.3462,-0.127 1.6002,0 2.6416,0.4572 1.0668,0.4318 1.7018,1.2446 0.635,0.7874 0.889,1.905 0.2794,1.1176 0.2794,2.4892 v 7.4676 h -3.0734 v -6.985 q 0,-1.0668 -0.1524,-1.8034 -0.127,-0.762 -0.4572,-1.2192 -0.3048,-0.4826 -0.8382,-0.6858 -0.5334,-0.2286 -1.3208,-0.2286 -0.6096,0 -1.2446,0.127 -0.635,0.127 -0.9398,0.2286 v 10.5664 z" stroke-dasharray="79.88858032226562" style="stroke-dashoffset: 0px; fill: rgb(255, 255, 255);"></path>
              </g>
            </svg>
          </div>
          <div id="i1">
              <svg viewBox="0 0 100 100" width="200" height="200">
                  <g fill="rgba(255, 255, 255, 0)" fill-rule="evenodd" stroke="white" stroke-width="0.2" class="lines">
                      <path id="path" d="m 17.386073,24.195684 h -3.0734 V 10.911485 h 3.0734 z m 0.3302,-17.1703993 q 0,0.8636 -0.5588,1.3716 -0.5588,0.508 -1.3208,0.508 -0.7874,0 -1.3462,-0.508 -0.5588,-0.508 -0.5588,-1.3716 0,-0.889 0.5588,-1.397 0.5588,-0.508 1.3462,-0.508 0.762,0 1.3208,0.508 0.5588,0.508 0.5588,1.397 z" stroke-dasharray="44.72138214111328" style="stroke-dashoffset: 0px; fill: rgb(255, 255, 255);"></path>
                  </g>
              </svg>
          </div>
          <div id="v1">
              <svg viewBox="0 0 100 100" width="200" height="200">
                  <g fill="rgba(255, 255, 255, 0)" fill-rule="evenodd" stroke="white" stroke-width="0.2" class="lines">
                      <path id="path" d="m 13.438641,23.203497 q -1.27,-2.6162 -2.6162,-5.9944 -1.3208002,-3.4036 -2.4130002,-7.2897999 h 3.2766002 q 0.2794,1.1175999 0.635,2.4129999 0.381,1.27 0.7874,2.5654 0.4318,1.27 0.8636,2.4892 0.4572,1.1938 0.8382,2.159 0.381,-0.9652 0.8128,-2.159 0.4318,-1.2192 0.8382,-2.4892 0.4318,-1.2954 0.8128,-2.5654 0.381,-1.2954 0.6604,-2.4129999 h 3.175 q -1.0922,3.8861999 -2.4384,7.2897999 -1.3208,3.3782 -2.5908,5.9944 z" stroke-dasharray="57.795249938964844" style="stroke-dashoffset: 0px; fill: rgb(255, 255, 255);"></path>
                  </g>
              </svg>
          </div>
          <div id="a1">
              <svg viewBox="0 0 100 100" width="200" height="200">
                  <g fill="rgba(255, 255, 255, 0)" fill-rule="evenodd" stroke="white" stroke-width="0.2" class="lines">
                      <path id="path" d="m 27.181856,21.800448 q 1.4224,0 2.159,-0.1524 v -3.4036 q -0.254,-0.0762 -0.7366,-0.1524 -0.4826,-0.0762 -1.0668,-0.0762 -0.508,0 -1.0414,0.0762 -0.508,0.0762 -0.9398,0.2794 -0.4064,0.2032 -0.6604,0.5842 -0.254,0.3556 -0.254,0.9144 0,1.0922 0.6858,1.524 0.6858,0.4064 1.8542,0.4064 z m -0.254,-11.4554 q 1.524,0 2.5654,0.381 1.0414,0.381 1.651,1.0668 0.635,0.6858 0.889,1.6764 0.2794,0.9652 0.2794,2.1336 v 8.0518 q -0.7112,0.1524 -2.159,0.3556 -1.4224,0.2286 -3.2258,0.2286 -1.1938,0 -2.1844,-0.2286 -0.9906,-0.2286 -1.7018,-0.7366 -0.6858,-0.508 -1.0922,-1.3208 -0.381,-0.8128 -0.381,-2.0066 0,-1.143 0.4318,-1.9304 0.4572,-0.7874 1.2192,-1.27 0.762,-0.508 1.7526,-0.7112 1.016,-0.2286 2.1082,-0.2286 0.508,0 1.0668,0.0762 0.5588,0.0508 1.1938,0.2032 v -0.508 q 0,-0.5334 -0.127,-1.016 -0.127,-0.4826 -0.4572,-0.8382 -0.3048,-0.381 -0.8382,-0.5842 -0.508,-0.2032 -1.2954,-0.2032 -1.0668,0 -1.9558,0.1524 -0.889,0.1524 -1.4478,0.3556 l -0.381,-2.4892 q 0.5842,-0.2032 1.7018,-0.4064 1.1176,-0.2032 2.3876,-0.2032 z" stroke-dasharray="70.0188980102539" style="stroke-dashoffset: 0px; fill: rgb(255, 255, 255);"></path>
                  </g>
              </svg>
          </div>
          <div id="n1">
              <svg viewBox="0 0 100 100" width="200" height="200">
                  <g fill="rgba(255, 255, 255, 0)" fill-rule="evenodd" stroke="white" stroke-width="0.2" class="lines">
                      <path id="path" d="m 18.445012,10.823566 q 0.889,-0.254 2.3114,-0.4826 1.4224,-0.2286 3.1496,-0.2286 1.6256,0 2.7178,0.4572 1.0922,0.4318 1.7272,1.2446 0.6604,0.7874 0.9144,1.9304 0.2794,1.1176 0.2794,2.4638 v 7.4676 h -3.0734 v -6.985 q 0,-1.0668 -0.1524,-1.8034 -0.127,-0.762 -0.4572,-1.2192 -0.3048,-0.4826 -0.8636,-0.6858 -0.5334,-0.2286 -1.3208,-0.2286 -0.5842,0 -1.2192,0.0762 -0.635,0.0762 -0.9398,0.127 v 10.7188 h -3.0734 z" stroke-dasharray="67.03599548339844" style="stroke-dashoffset: 0px; fill: rgb(255, 255, 255);"></path>
                  </g>
              </svg>
          </div>
          <div id="s2">
              <svg viewBox="0 0 100 100" width="200" height="200">
                  <g fill="rgba(255, 255, 255, 0)" fill-rule="evenodd" stroke="white" stroke-width="0.2" class="lines">
                      <path id="path" d="m 21.347188,18.111628 q 1.2192,0 1.778,-0.2794 0.5588,-0.3048 0.5588,-1.016 0,-0.6604 -0.6096,-1.0922 -0.5842,-0.4318 -1.9558,-0.9398 -0.8382,-0.3048 -1.5494,-0.635 -0.6858,-0.3556 -1.1938,-0.8128 -0.508,-0.4572 -0.8128,-1.0922 -0.2794,-0.6604 -0.2794,-1.6002 0,-1.8287995 1.3462,-2.8701995 1.3462,-1.0668 3.6576,-1.0668 1.1684,0 2.2352,0.2286 1.0668,0.2032 1.6002,0.4064 l -0.5588,2.4892 q -0.508,-0.2286 -1.2954,-0.4064 -0.7874,-0.2032 -1.8288,-0.2032 -0.9398,0 -1.524,0.3302 -0.5842,0.3048 -0.5842,0.9651995 0,0.3302 0.1016,0.5842 0.127,0.254 0.4064,0.4826 0.2794,0.2032 0.7366,0.4318 0.4572,0.2032 1.1176,0.4318 1.0922,0.4064 1.8542,0.8128 0.762,0.381 1.2446,0.889 0.508,0.4826 0.7366,1.1176 0.2286,0.635 0.2286,1.524 0,1.905 -1.4224,2.8956 -1.397,0.9652 -4.0132,0.9652 -1.7526,0 -2.8194,-0.3048 -1.0668,-0.2794 -1.4986,-0.4572 l 0.5334,-2.5654 q 0.6858,0.2794 1.6256,0.5334 0.9652,0.254 2.1844,0.254 z" stroke-dasharray="60.506553649902344" style="stroke-dashoffset: 0px; fill: rgb(255, 255, 255);"></path>
                  </g>
              </svg>
          </div>
          <div id="h2">
              <svg viewBox="0 0 100 100" width="200" height="200">
                  <g fill="rgba(255, 255, 255, 0)" fill-rule="evenodd" stroke="white" stroke-width="0.2" class="lines">
                      <path id="path" d="m 16.602378,24.053944 V 4.8515439 l 3.0734,-0.508 v 6.5786001 q 0.508,-0.1778 1.1684,-0.3048 0.6858,-0.127 1.3462,-0.127 1.6002,0 2.6416,0.4572 1.0668,0.4318 1.7018,1.2446 0.635,0.7874 0.889,1.905 0.2794,1.1176 0.2794,2.4892 v 7.4676 h -3.0734 v -6.985 q 0,-1.0668 -0.1524,-1.8034 -0.127,-0.762 -0.4572,-1.2192 -0.3048,-0.4826 -0.8382,-0.6858 -0.5334,-0.2286 -1.3208,-0.2286 -0.6096,0 -1.2446,0.127 -0.635,0.127 -0.9398,0.2286 v 10.5664 z" stroke-dasharray="79.88858032226562" style="stroke-dashoffset: 0px; fill: rgb(255, 255, 255);"></path>
                  </g>
              </svg>
          </div>
          <div class="lastname" id="V2">
              <svg viewBox="0 0 100 100" width="200" height="200">
                  <g fill="rgba(255, 255, 255, 0)" fill-rule="evenodd" stroke="white" stroke-width="0.2" class="lines">
                      <path id="path" d="m 27.122891,30.054314 q -1.905,-4.1148 -3.683,-8.6106 -1.7526,-4.4958 -3.2766,-8.9916 h 3.5306 q 0.6096,1.778 1.2446,3.6322 0.635,1.8542 1.27,3.6576 0.635,1.778 1.27,3.4544 0.635,1.6764 1.2446,3.0734 0.5842,-1.397 1.2192,-3.048 0.635,-1.6764 1.27,-3.4798 0.6604,-1.8034 1.2954,-3.6576 0.635,-1.8542 1.2192,-3.6322 h 3.429 q -1.5494,4.4958 -3.302,8.9916 -1.7526,4.4958 -3.6576,8.6106 z" stroke-dasharray="77.31338500976562" style="stroke-dashoffset: 0px; fill: rgb(255, 255, 255);"></path>
                  </g>
              </svg>
          </div>
          <div class="lastname" id="i2">
              <svg viewBox="0 0 100 100" width="200" height="200">
                  <g fill="rgba(255, 255, 255, 0)" fill-rule="evenodd" stroke="white" stroke-width="0.2" class="lines">
                      <path id="path" d="m 17.386073,24.195684 h -3.0734 V 10.911485 h 3.0734 z m 0.3302,-17.1703993 q 0,0.8636 -0.5588,1.3716 -0.5588,0.508 -1.3208,0.508 -0.7874,0 -1.3462,-0.508 -0.5588,-0.508 -0.5588,-1.3716 0,-0.889 0.5588,-1.397 0.5588,-0.508 1.3462,-0.508 0.762,0 1.3208,0.508 0.5588,0.508 0.5588,1.397 z" stroke-dasharray="44.72138214111328" style="stroke-dashoffset: 0px; fill: rgb(255, 255, 255);"></path>
                  </g>
              </svg>
          </div>
          <div class="lastname" id="j1">
              <svg viewBox="0 0 100 100" width="200" height="200">
                  <g fill="rgba(255, 255, 255, 0)" fill-rule="evenodd" stroke="white" stroke-width="0.2" class="lines">
                      <path id="path" d="m 28.082497,28.967329 q -0.3302,0 -0.9144,-0.0762 -0.6096,-0.0508 -1.0668,-0.2286 l 0.4064,-2.5146 q 0.5588,0.1778 1.3462,0.1778 1.0668,0 1.4986,-0.635 0.4318,-0.6096 0.4318,-1.8542 V 10.95873 h 3.0734 v 12.928599 q 0,2.5908 -1.2446,3.8354 -1.2192,1.2446 -3.5306,1.2446 z m 5.1054,-21.8947993 q 0,0.8636 -0.5588,1.3716 -0.5588,0.508 -1.3208,0.508 -0.7874,0 -1.3462,-0.508 -0.5588,-0.508 -0.5588,-1.3716 0,-0.889 0.5588,-1.397 0.5588,-0.508 1.3462,-0.508 0.762,0 1.3208,0.508 0.5588,0.508 0.5588,1.397 z" stroke-dasharray="58.42534255981445" style="stroke-dashoffset: 0px; fill: rgb(255, 255, 255);"></path>
                  </g>
              </svg>
          </div>
        </div>
        <div class="terminal-window" @click="setInputFocus()">
          <header>
            <div class="button green"></div>
            <div class="button yellow"></div>
            <div class="button red"></div>
          </header>
          <section class="terminal" ref="terminal">
            <div v-if="intro1" class="intro1">
            </div>
            <div v-if="intro2" class="intro2">
              Hi! My name is Shivansh Vij and I'm currently a second year Computer Engineering student at the University of Waterloo.<br><br>I'm also currrently looking for my next co-op so please feel free to reach out at <a href="mailto:shivansh.vij@uwaterloo.ca">shivansh.vij@uwaterloo.ca</a>!<br><br>You can scroll down to learn more about my background, side projects, and past employment experience. You can also interact directly with this terminal by pressing enter.
            </div>
            <div class="history">{{terminal_history}}</div>
            <div v-if="input" class="columns is-mobile is-gapless is-vcentered is-multiline">
              <div class="column is-narrow-desktop is-narrow-tablet is-12-mobile">
                <span class="prompt">user@shivanshvij.com: ~/home $</span>
              </div>
              <div class="column is-12-mobile">
                <input type="text" class="input" ref="terminal_input" v-model="terminal_input" v-on:keyup.enter="terminal_submit()">
                <span class="typed-cursor"></span>
              </div>
            </div>  
          </section>
        </div>
        <div class="arrow">
          <i class="fa fa-chevron-down" aria-hidden="true"></i>
        </div>
      </div>
      <div class="column is-1"></div>
    </div>
    <div class="columns is-mobile" id="profiles">
      <div class="column is-1"></div>
      <div class="column is-2" id="profile">
        <a href="https://github.com/shivanshvij" style="color: inherit">
          <i class="fa fa-github" aria-hidden="false"></i>
        </a>
      </div>
      <div class="column is-2" id="profile">
        <a href="https://www.linkedin.com/in/shivanshvij/" style="color: inherit">
          <i class="fa fa-linkedin-square" aria-hidden="false"></i>
        </a>
      </div>
      <div class="column is-2" id="profile">
        <a href="/shivanshvijresume.pdf" style="color: inherit">
          <i class="fa fa-file-text" aria-hidden="false"></i>
        </a>
      </div>
      <div class="column is-2" id="profile">
        <a href="https://rubygems.org/profiles/ShivanshVij" style="color: inherit">        
          <i class="fa fa-diamond" aria-hidden="false"></i>
        </a>
      </div>
      <div class="column is-2" id="profile">
        <a href="https://medium.com/@shivanshvij/" style="color: inherit">        
          <i class="fa fa-medium" aria-hidden="false"></i>
        </a>
      </div>
      <div class="column is-1"></div>
    </div>
    <div id='particles-experience' class="particle-experience"></div>  
    <div class="container">  
      <div class="bar bar1" ref="bar1"></div>
      <div class="ball"></div>
      <div class="bar bar2" ref="bar2"></div>
    </div>
    <div class="timeline">

      <div class="timeline-item">
        <div class="timeline-icon">
          <img style="margin-left: -29px; margin-top: 8px;" src="/img/IBM_logo.png" alt="IBM" height="32px" width="32px">          
        </div>
        <div class="timeline-content right">
          <p class="timeline-content-date">
            Software Engineering Intern @ IBM
            <br>
            Jan. 2019&nbsp;&nbsp;-&nbsp;&nbsp;August. 2019
          </p>
          <p>Currently designing a custom Motor Controller Board utilizing the Controller Area Network (CAN) and I2C Serial Communications Protocols.</p>
          <p>Learned Altium and LTSpice to test and improve circuitry and increase size efficiency. Worked with the Electrical team to integrate the finished product into a Mars Rover prototype.</p>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-icon">
          <img style="margin-left: -27px; margin-top: -1px;" src="/img/robotics_logo.png" alt="UW Robotics Team" height="32px" width="32px">          
        </div>
        <div class="timeline-content">
          <p class="timeline-content-date">
            Motor Control Designer @ UW Robotics Team
            <br>
            Sept. 2018&nbsp;&nbsp;-&nbsp;&nbsp;Sept. 2019
          </p>
          <p>Currently designing a custom Motor Controller Board utilizing the Controller Area Network (CAN) and I2C Serial Communications Protocols.</p>
          <p>Learned Altium and LTSpice to test and improve circuitry and increase size efficiency. Worked with the Electrical team to integrate the finished product into a Mars Rover prototype.</p>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-icon">
          <img style="margin-left: -26.5px; margin-top: -2px" src="/img/Tensorflow_logo.svg" alt="OpenText" height="30px" width="30px">
        </div>
        <div class="timeline-content right">
          <p class="timeline-content-date">
            Software Developer @ OpenText
            <br>
            May 2018&nbsp;&nbsp;-&nbsp;&nbsp;Sept. 2018
          </p>
          <p>Lead the Research, Design, and Implementation of a Predictive AI using Tensorflow and SciKit to understand automated testing crashes and reduce debugging time in automated testing.</p>
          <p>Integrated a REST API for modifying, training, and using the AI over a web interface. Also utilized Python and Selenium to develop a custom Automated UI Testing Framework to reduce crashes in the company's software. Made improvements to existing code base to speed up testing and saved hundreds of compute hours.</p>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-icon">
          <img style="margin-left: -30px; margin-top: -5px" src="/img/uwnrg_logo.png" alt="UW Nanorobotics Group" height="32px" width="32px">          
        </div>
        <div class="timeline-content">
          <p class="timeline-content-date">
            Lead Hardware Engineer @ UW Nanorobotics Group
            <br>
            Sept. 2017&nbsp;&nbsp;-&nbsp;&nbsp;Sept. 2019
          </p>
          <p>Utilized KiCAD, Autodesk Eagle, and PSpice to design, test, and manufacture control circuitry for a new type of Sound-Actuated Nanorobot.</p>
          <p>Successfully demonstrated controlprototype to precisely move and rotate water droplets using Surface Acoustic Waves generated by control circuitry.</p>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import TypeIt from 'typeit';
import anime from 'animejs/lib/anime.es.js';

export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      intro1: true,
      intro2: false,
      input: false,
      mask: false,
      terminal_input: 'help',
      terminal_history: '',
      prompt: "user@shivanshvij.com: ~/home $",
    }
  },
  mounted () {
    require('particles.js')
    this.$nextTick(() => {
      this.initParticlesJS();
      this.initTyping();
      this.initAnime();
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
      });

      particlesJS('particles-experience',
      {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 750
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 1,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0,
              "sync": false
            }
          },
          "size": {
            "value": 2.5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 4,
              "size_min": 0.3,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "bottom-right",
            "random": false,
            "straight": true,
            "out_mode": "out",
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
      });
    },
    initTyping () {
      var self = this;
      new TypeIt('.intro1', {speed: 0, startDelay: 0, cursor: false})
      .type('user@shivanshvij.com: ~/home $ ')
      .options({speed: 50, startDelay: 60, cursor: true})
      .pause(1000)
      .type('cat shivanshvij.intro')
      .pause(500)
      .exec(async () => {
        self.intro2 = true;
        self.input = true;
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            self.$refs.terminal_input.focus();
            return resolve();
          }, 500)
        });
        
      })
      .go();

    },
    initAnime () {
      var logoTimeline = anime.timeline();
      var letterDuration = 500;
      var delay = 100;

      logoTimeline.add({
        targets: '.hexagon path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 800,
        delay: function(el, i) { return i * delay },
        direction: 'alternate',
      })
      .add({
        targets: '.hexagon path',
        duration: 250,
        delay: 0,
        easing: 'easeInOutSine',
        fill: [
            {value: 'rgba(255, 255, 255, 0)'},
            {value: '#FFFFFF'},
        ],
      })
      .add({
        targets: '.hex_picture',
        duration: 250,
        delay: 10,
        easing: 'easeInOutSine',
        opacity: [0,1]
      })
      .add({
        targets: '.lines path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: letterDuration,
        delay: function(el, i) { return i * delay },
        direction: 'alternate',
        fill: [
            {value: 'rgba(255, 255, 255, 0)'},
            {value: '#FFFFFF'},
        ],
      })
      .add({
        targets: '#button',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 300,
        delay: 0,
        opacity: [0, 1]
      })
      .add({
        targets: '.arrow',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 400,
        delay: 200,
        opacity: [0, 1]
      })
      var loop = true;
      var easing = 'linear';
      var direction = 'alternate';
      var pong_width = this.$refs.bar2.getBoundingClientRect().left - this.$refs.bar1.getBoundingClientRect().right;
      var pong_height = window.innerHeight*0.5;

      anime({
        targets: '.ball',
        translateX: pong_width,
        translateY: pong_height,
        easing,
        loop,
        direction,
        background: [
          { value: '#573796' }, 
          { value: '#FB89FB' },
          { value: '#FBF38C' },
          { value: '#18FF92' },
          { value: '#5A87FF' }
        ]
      })

      var ballTimeline = anime.timeline({
        loop,
        direction,
        duration: 3000,
      })

      var bar2Timeline = anime.timeline({
        loop,
        direction,
        duration: 3000,
      })

      var bar1Timeline = anime.timeline({
        loop,
        direction,
        duration: 3000
      })

      ballTimeline
      .add({
        targets: '.ball',
        translateY: pong_height,
        translateX: pong_width,
        easing
      }).add({
        targets: '.ball',
        translateY: 0,
        translateX: 0,
        easing
      }).add({
        targets: '.ball',
        translateY: (-1*pong_height).toString(),
        translateX: pong_width,
        easing
      })

      bar2Timeline
      .add({
        targets: '.bar2',
        translateY: pong_height,
        easing,
        background: '#573796'
      }).add({
        targets: '.bar2',
        translateY: 0,
        easing,
        background: '#FB89FB'
      }).add({
        targets: '.bar2',
        translateY: (-1*pong_height).toString(),
        easing,
        background: '#FBF38C'
      })

      bar1Timeline
      .add({
        targets: '.bar1',
        translateY: (-1*pong_height+20).toString(),
        easing,
        background: '#18FF92'
      }).add({
        targets: '.bar1',
        translateY: 0,
        easing,
        background: '#5A87FF'
      }).add({
        targets: '.bar1',
        translateY: pong_height*0.6,
        easing,
        background: '#FF1461'
      })
    },
    setInputFocus () {
      if(this.input) {
        this.$refs.terminal_input.focus();
      }
    },
    async terminal_submit () {
      var terminal = this.$refs.terminal;
      switch(this.terminal_input) {
        case '':
          break;
        case 'help':
          this.terminal_input = '';
          this.terminal_history = this.terminal_history + this.prompt + ' help\nThe following commands are available:\n- cat <filename> : Outputs the contents of the given file\n- ls : Lists the files in this directory\n- clear: clear the terminal\n\n';
          break;
        case 'clear':
          this.terminal_input = '';
          this.terminal_history = '';
          this.intro1 = false;
          this.intro2 = false;
          break;
        case 'ls':
          this.terminal_input = '';
          this.terminal_history = this.terminal_history + this.prompt + ' ls\nshivanshvij.intro\n\n';
          break;
        case 'cat shivanshvij.intro':
          this.terminal_input = '';
          this.terminal_history = this.terminal_history + this.prompt + " cat shivanshvij.intro\nHi! My name is Shivansh Vij and I'm currently a second year Computer Engineering student at the University of Waterloo.\n\nI'm also currrently looking for my next co-op so please feel free to reach out at shivansh.vij@uwaterloo.cas!\n\nYou can scroll down to learn more about my background, side projects, and past employment experience.\n\n";
          break;          
        default:
          this.terminal_history = this.terminal_history + this.prompt + ' ' + this.terminal_input + '\nUnknown Command\n\n';
      }

      await new Promise((resolve, reject) => {
        setTimeout(() => {
          terminal.scrollTop = terminal.scrollHeight;
          return resolve();
        }, 10)
      });
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
  z-index: 10;
}

.particle-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 32%;
  z-index: -1;
}

.particle-experience {
  margin-top: -12px;
  top: 0;
  left: 0;
  right: 0;
  height: 66%;
  z-index: -1;
  background-color: #232741;
}

body {
  background: #6D7074;
}

svg{
  width: 200px;
  height: 200px;
}

.terminal-window {
  text-align: left;
  width: 100%;
  height: 550px;
  border-radius: 10px;
  margin: auto;
  margin-top:290px;
  position: relative;
}

.terminal-window header {
  background: rgb(69,69,69);
  height: 30px;
  border-radius: 8px 8px 0 0;
  padding-left: 10px;
}

.terminal-window header .button {
  width: 15px;
  height: 15px;
  margin: 8px 4px 0 0;
  display: inline-block;
  border-radius: 8px;
  border: 0px;
  padding: 0;
}

.terminal-window header .button.green {
  background: #3BB662;
}

.terminal-window header .button.yellow {
  background: #E5C30F;
}

.terminal-window header .button.red {
  background: #E75448;
}

.terminal-window section.terminal {
  color: white;
  font-family: Menlo, Monaco, "Consolas", "Courier New", "Courier";
  /* font-family: 'Oxygen', sans-serif; */
  font-size: 15pt;
  background: #2C001E;
  padding: 10px;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  top: 30px;
  bottom: 0;
  overflow: auto;
  border-bottom-left-radius:10px;
  border-bottom-right-radius:10px;
}
.input{
  font-family: Menlo, Monaco, "Consolas", "Courier New", "Courier";
  font-size: 15pt;
  display: inline-block;
  border: none;
  background: none;
  color: white;
  outline: none;
}

.intro2{
  margin-top: 20px;
  margin-bottom: 20px;
}

.history {
  white-space: pre-wrap;       /* Since CSS 2.1 */
  white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
  white-space: -pre-wrap;      /* Opera 4-6 */
  white-space: -o-pre-wrap;    /* Opera 7 */
  word-wrap: break-word;       /* Internet Explorer 5.5+ */
  overflow-wrap: break-word;
  line-height: 30px;
}

@media only screen and (max-width: 1023px) {
  .terminal-window {
    margin-top: 240px;
    height: 550px;
  }
  .terminal-window section.terminal {
    font-size: 11pt;
  }
  .input{
    font-size: 11pt;
  }
}

.terminal-window section.terminal .typed-cursor {
    opacity: 1;
    -webkit-animation: blink 0.7s infinite;
    -moz-animation: blink 0.7s infinite;
    animation: blink 0.7s infinite;
}
@keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}
@-webkit-keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}
@-moz-keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}

.terminal-data { display: none; }
.terminal-window .gray { color: gray; }
.terminal-window .green { color: green;}

#letters{
    position: relative;
    /* height: auto; */
    width: 300px;
    margin-left: calc(50% - 16em);
    margin-top: 12.55em;
    padding: 0;
}
#S1{
    display: inline;
    position: absolute;
    padding: 0;
    margin: 0;
    left: 0;
    top: 0;
}
#h1{
    display: inline;
    position: absolute;
    padding: 0;
    margin: 0;
    left: 0;
    top: 0;
    margin-left:100px;
    margin-top: -6px;
}
#i1{
    display: inline;
    position: absolute;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
    margin-left:133px;
    margin-top: -6px;
}
#v1{
    display: inline;
    position: absolute;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
    margin-left:156px;
    margin-top: -4px;
}
#a1{
    display: inline;
    position: absolute;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
    margin-left:157px;
    margin-top: -5px;
}
#n1{
    display: inline;
    position: absolute;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
    margin-left:190px;
    margin-top: -5px;
}
#s2{
    display: inline;
    position: absolute;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
    margin-left:220px;
    margin-top: 1.6px;
}
#h2{
    display: inline;
    position: absolute;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
    margin-left:246px;
    margin-top: -5.3px;
}
#V2{
    display: inline;
    position: absolute;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
    margin-left:286px;
    margin-top: -17.1px;
}
#i2{
    display: inline;
    position: absolute;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
    margin-left:338px;
    margin-top: -5px;
}
#j1{
    display: inline;
    position: absolute;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
    margin-left:325px;
    margin-top: -5px;
}

.picture{
  display: inline;
  position: absolute;
  padding: 0;
  margin: 0;
  left: 0;
  top: 0;
  margin-left: calc(50% - 5.5em);
  margin-top: 3em;
}
.hex_svg{
  margin-left: 10px;
  padding: 0;
}

@media only screen and (max-width: 1023px) {
  .picture{
    margin-top: 2em;
  }

  #letters{
      margin-left: calc(50% - 15.5em);
      margin-top: 11em;
  }

}

.arrow {
  position:relative;
  width:300px;
  top: 30px;
  right:25%;
  left:50%;
  color: white;
  font-size: 30pt;
  margin-left:-150px;
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

#profiles {
  color: white;
  font-size: 55pt;
  margin-top: 40px;
  z-index: 100000;
  background: rgb(9, 10, 17); /* Old browsers */
  background: -moz-linear-gradient(top, rgb(9, 10, 17) 15%, #232741 85%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgb(9, 10, 17) 15%,#232741 85%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgb(9, 10, 17) 15%,#232741 85%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='rgb(9, 10, 17)', endColorstr='#232741',GradientType=0 ); /* IE6-9 */
}

#profile .fa-github:hover {
  z-index: 100001;
  color: #ffffff;
  text-shadow: 0 0 20px #ffffff;
}
#profile .fa-linkedin-square:hover {
  z-index: 100001;
  color: #0077B5;
  text-shadow: 0 0 20px #0077B5;
}

#profile .fa-diamond:hover {
  z-index: 100001;
  color: #E94F64;
  text-shadow: 0 0 20px #E94F64;
}

#profile .fa-file-text:hover {
  background: -webkit-linear-gradient(to top, #5433ff, #20bdff, #a5fecb);
  background: linear-gradient(to top, #5433ff, #20bdff, #a5fecb);
	-webkit-background-clip: text;
  background-clip: text;
	-webkit-text-fill-color: transparent;
  text-shadow: 0px 0px 50px rgba(255, 255, 255, 0.37);
}


#profile .fa-medium:hover {
  z-index: 100001;
  color: rgb(131, 68, 204);
  text-shadow: 0 0 20px rgb(131, 68, 204);  
}

.container {
  width: 100%;
  height: 10%;
  display: inline-block;
  transform: translateY(160%);
  position: absolute;
  left: 0;
  top: 67%;
  max-width: 100%;
}
.bar {
  background: #FFFFFF;
  width: 10px;
  height: 100px;
  position: absolute;
}

.bar1 {
  left: 5%;
}
.bar2 {
  right: 5%;
}

.ball {
  background: #FFFFFF;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 45px;
  left: calc(5% + 10px);
}

@media only screen and (max-width: 1023px) {
  #profiles {
    font-size: 30pt;
  }

  .particle-background {
    height: 37%;
  }

  .particle-experience {
    height: 63%;
  }

  .container {
    top: 65%;
  }
}

@media only screen and (max-width: 2000px) {
  .container {
    top: 49%;
  }

  .particle-background {
    height: 37%;
  }

  .particle-experience {
    height: 70%;
  }

}

@media only screen and (max-height: 700px) {
  .container {
    top: 60%;
  }
}


.timeline .timeline-item::after, .timeline .timeline-item::before {
  clear: both;
  content: '';
  display: block;
  width: 100%;
}

.timeline {
  margin: 30px auto;
  padding: 0 10px;
  position: absolute;
  transition: all 0.25s ease-in;
  top: 50%;
  width: 100%;
  z-index: 1200;
}

@media only screen and (max-width: 1100px) {
  .timeline {
    top: 45%;
  }
}

@media only screen and (max-width: 850px) {
  .timeline {
    top: 40%;
  }
}

@media only screen and (max-width: 750px) {
  .timeline {
    top: 38%;
  }
}

@media only screen and (max-width: 639px) {
  .timeline {
    top: 44%;
  }
}

@media only screen and (max-width: 550px) {
  .timeline {
    top: 40%;
  }
}

@media only screen and (max-width: 450px) {
  .timeline {
    top: 40%;
  }
}

@media only screen and (max-width: 400px) {
  .timeline {
    top: 38%;
  }
}

@media only screen and (max-width: 340px) {
  .timeline {
    top: 34%;
  }
}

.timeline::before {
  background: #fefefe;
  content: '';
  height: 100%;
  left: 50%;
  position: absolute;
  top: 0;
  width: 3px;
}

.timeline::after {
  clear: both;
  content: '';
  display: table;
  width: 100%;
}

.timeline a {
  color: #fefefe;
  font-weight: bold;
  transition: all 0.25s ease-in;
}

.timeline a:hover {
  box-shadow: 0 1px 0px 0px #fefefe;
  transition: all 0.25s ease-in;
}

.timeline .timeline-item {
  margin-bottom: 50px;
  position: relative;
}

.timeline .timeline-item .timeline-icon {
  background: #fefefe;
  border-radius: 50%;
  height: 50px;
  left: 50%;
  margin-left: -23px;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 50px;
}

.timeline .timeline-item .timeline-icon img,
.timeline .timeline-item .timeline-icon svg {
  left: 14px;
  position: relative;
  top: 11px;
}

.timeline .timeline-item .timeline-icon svg {
  top: 14px;
}

.timeline .timeline-item .timeline-content {
  padding: 20px;
  text-align: right;
  transition: all 0.25s ease-in;
  width: 45%;
  background: transparent;
}

.timeline .timeline-item .timeline-content p {
  color: #fefefe;
}

.timeline .timeline-item .timeline-content p {
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 0;
}

.timeline .timeline-item .timeline-content .timeline-content-date {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 0;
}

.timeline .timeline-item .timeline-content .timeline-content-month {
  font-size: 0.875rem;
  text-transform: uppercase;
  font-weight: 400;
}

.timeline .timeline-item .timeline-content.right {
  float: right;
  text-align: left;
}

@media screen and (max-width: 39.9375em) {
  .timeline {
    margin: 30px;
    padding: 0;
    width: 90%;
  }
  .timeline::before {
    left: 0;
  }
  .timeline .timeline-item .timeline-content {
    float: right;
    text-align: left;
    width: 90%;
  }
  .timeline .timeline-item .timeline-content::before, .timeline .timeline-item .timeline-content.right::before {
    border-left: 0;
    border-right: 7px solid #fefefe;
    left: 10%;
    margin-left: -6px;
  }
  .timeline .timeline-item .timeline-icon {
    left: 0;
  }
}




</style>