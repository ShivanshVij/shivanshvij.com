<template>
  <div class="relative h-full w-full max-w-full bg-light">
    <div id="sidebars" class="hidden md:flex w-full fixed justify-between left-0 bottom-0 z-0 load-hidden">
      <div class="ml-8">
        <div class="vertical-text text-3xl mb-56 text-gray-600">
          <a href="https://github.com/shivanshvij" class="hover:text-gray-400 mr-4">
            <i class="normal-text fab fa-github-square"></i>
          </a>
          <a href="https://linkedin.com/in/shivanshvij" class="hover:text-gray-400 mr-4">
            <i class="normal-text fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/confusedqubit" class="hover:text-gray-400 mr-4">
            <i class="normal-text fab fa-twitter-square"></i>
          </a>
          <a href="https://rubygems.org/profiles/ShivanshVij" class="hover:text-gray-400 mr-4">
            <i class="normal-text fas fa-gem"></i>
          </a>
          <a href="https://medium.com/@shivanshvij/" class="hover:text-gray-400">
            <i class="normal-text fab fa-medium"></i>
          </a>
        </div>
        <div class="border-l h-40"></div>
      </div>
      <div class="mr-8">
        <div class="reverse-vertical-text font-sans text-lg text-gray-600">
          <a href="mailto@shivansh.vij@uwaterloo.ca" class="hover:text-gray-400 mr-4">
            <p>shivansh.vij@uwaterloo.ca</p>
          </a>
        </div>
        <div class="border-r h-40"></div>
      </div>
    </div>
    <transition name="fade">
      <div id="sidebars" class="fixed flex w-full justify-center left-0 bottom-0 text-white text-2xl z-0 mb-4 load-hidden" :class="{ 'fade': scrolled }">
        <i class="fas fa-angle-down" :class="{ 'bounce': !scrolled }"></i>
      </div>
    </transition>
    <div class="h-screen w-full" style="min-height: 48rem;">
      <mainnav id="nav" class="load-hidden" />
      <!-- <div class="p-16">
        <div id="terminal" class="w-full" style="height: 350px;">
        </div>
      </div> -->
      <div class="w-full flex items-center justify-center p-4 mt-8 sm:mt-16 md:mt-32 mb-16">
        <div class="max-w-screen md:max-w-6xl w-full flex flex-col items-center justify-start text-3xl text-white font-semibold mx-8 sm:mx-16 sm:mx-32 relative z-10">
          <div class="w-full">
            <p id="introtitle" class="font-medium text-xl text-logo load-hidden">Hi, my name is</p>
            <p id="introtitle" class="font-sans font-semibold text-5xl md:text-6xl -mt-2 load-hidden">Shivansh Vij.</p>
            <p id="introtitle" class="font-sans font-medium text-gray-500 text-3xl sm:text-4xl md:text-6xl -mt-2 md:-mt-4 load-hidden">I love building things.</p>
            <div id="introdescription" class="load-hidden">
              <p class="font-normal text-gray-600 text-lg mt-4 md:mt-0 w-full lg:w-2/3">
                I'm a third year computer engineering student at the University of Waterloo with experience in 
                Frontend, Backend, DevOps, and everything in between. I'm graduating in April 2022 and am currently 
                searching for my next internship.
              </p>
              <span class="inline-flex rounded-md shadow-lg mt-6 md:mt-12">
                <a href="mailto:shivansh.vij@uwaterloo.ca">
                  <button type="button" class="inline-flex items-center px-4 py-2 md:px-6 md:py-4 border border-logo text-sm md:text-base leading-5 font-medium rounded-md text-logo hover:underline hover:bg-dark focus:outline-none focus:border-white focus:shadow-outline-white transition ease-in-out duration-150">
                    Get in Touch
                  </button>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-full w-full">
      <div class="w-full flex items-center justify-center p-4 mt-64 md:mt-0 mb-16 md:mb-40">
        <div class="max-w-screen md:max-w-6xl w-full flex flex-col items-center justify-start text-3xl text-white font-semibold mx-8 sm:mx-16 sm:mx-32 relative z-10">
          <div id="" class="w-full">
            <div class="font-medium text-xl text-logo border-b border-logo ml-24" style="line-height: 0.1em;"><p class="-ml-24">About Me</p></div>
            <div class="w-full flex flex-col md:flex-row items-center justify-center pt-8">
              <p class="font-normal text-gray-600 text-lg w-full md:pr-8 pb-8 md:pb-0 lg:w-2/3">
                Well hello there! I'm Shivansh, a computer engineering student who's in his third year at the University of Waterloo.
                <br><br>
                I'm passionate about technology and I love solving complex problems. Whether it's figuring out how how to install OpenShift on Bare Metal hardware, desiging 
                a faster, better Ngrok from the ground up, or just figuring out how to embed firebase authentication in an SPA, I enjoy a good challenge and don't mind
                picking up some new skills to solve a problem.
                <br><br>
                You can learn more about some of the cool stuff I've been doing recently on my <nuxt-link to="/blog" class="text-blue-400 hover:underline">blog</nuxt-link>.
              </p>
              <div class="outline w-64">
                <img src="~/assets/images/shivanshvij.jpg"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <foot/>
  </div>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicDom from "prismic-dom";
import ScrollReveal from 'scrollreveal';

import PrismicConfig from "~/prismic.config.js";

import mainnav from "~/components/mainnav";
import foot from "~/components/foot";

export default {
  components: {
    mainnav,
    foot
  },
  data() {
    return {
      scrolled: false
    }
  },
  async asyncData() {
    const api = await Prismic.getApi(PrismicConfig.apiEndpoint);
    let topPost = {};
    const posts = await api.query(
      Prismic.Predicates.at("document.type", "post")
    );
    return { 
      posts,
    };
  },
  methods: {
    scroll () {
      this.scrolled = true;
    }
  },
  mounted () {
    document.addEventListener('scroll', this.scroll)
    ScrollReveal().reveal('#nav')
    ScrollReveal().reveal('#introtitle', { delay: 300 })
    ScrollReveal().reveal('#introdescription', { delay: 600 })
    ScrollReveal().reveal('#sidebars', { delay: 900 })
  }
};
</script>

<style>
.application {
  box-shadow: none;
}

.desktop .application.application-maximized {
  box-shadow: none;
}

.normal-text {
  transform: rotate(-90deg);
}

.vertical-text {
	transform: rotate(90deg);
  transform-origin: left top 0;
  margin-left: 1.5rem;
}

.reverse-vertical-text {
	transform: rotate(90deg);
  transform-origin: left top 0;
  margin-right: -20rem;
  margin-left: 1.05rem;
  margin-bottom: 12rem;
  margin-top: 1.5rem;
}

html.sr .load-hidden {
    visibility: hidden;
}

.outline {
	box-shadow: 16px 16px 0 -3px #13182A, 16px 16px 0 0 #dc6333;
}
</style>