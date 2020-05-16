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
    <div id="sidebars" class="flex md:hidden w-full fixed justify-end left-0 bottom-0 z-0 load-hidden">
      <div class="reverse-vertical-text font-sans text-base text-gray-600" style="margin-left: 0; margin-bottom: 12rem; margin-right: -26rem">
        <div class="pb-40">
          <p>
            <a href="https://github.com/shivanshvij" class="hover:text-gray-400"><i class="normal-text fab fa-github-square pr-2 text-xl"></i></a>
            <a href="https://linkedin.com/in/shivanshvij" class="hover:text-gray-400"><i class="normal-text fab fa-linkedin mb-1 pr-2 text-xl"></i></a>
            <a href="https://twitter.com/confusedqubit" class="hover:text-gray-400"><i class="normal-text fab fa-twitter-square mb-1 pr-2 text-xl"></i></a>
            <a href="https://rubygems.org/profiles/ShivanshVij" class="hover:text-gray-400"><i class="normal-text fas fa-gem mb-1 pr-2 text-xl"></i></a>
            <a href="https://medium.com/@shivanshvij/" class="hover:text-gray-400"><i class="normal-text fab fa-medium mb-1 pr-2 text-xl"></i></a>
            <a href="mailto:shivansh.vij@uwaterloo.ca" class="hover:text-gray-400 pl-1 pr-16">shivansh.vij@uwaterloo.ca</a>
          </p>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div id="sidebars" class="fixed hidden md:flex w-full justify-center left-0 bottom-0 text-white text-2xl z-0 mb-4 load-hidden" :class="{ 'fade': scrolled }">
        <i class="fas fa-angle-down relative z-20" :class="{ 'bounce': !scrolled }"></i>
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
    <div id="about" class="h-full w-full">
      <div class="w-full flex items-center justify-center p-4 mb-16 md:mb-40">
        <div class="max-w-screen md:max-w-6xl w-full flex flex-col items-center justify-start text-3xl text-white font-semibold mx-8 sm:mx-16 sm:mx-32 relative z-10">
          <div id="" class="w-full">
            <div class="font-medium text-xl text-logo border-b border-logo ml-24" style="line-height: 0.1em;"><p class="-ml-24">About Me</p></div>
            <div class="w-full flex flex-col md:flex-row items-center justify-center pt-8">
              <p class="font-normal text-gray-600 text-lg w-full md:pr-8 pb-8 md:pb-0 lg:w-2/3">
                Hi! I'm Shivansh, a computer engineering student who's in his third year at the University of Waterloo.
                <br><br>
                I'm passionate about technology and I love solving complex problems. Whether it's figuring out how to install OpenShift on Bare Metal hardware, desiging 
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
    <div class="h-full w-full font-sans">
      <div class="w-full flex items-center justify-center p-4 mb-16 md:mb-40">
        <div class="max-w-screen md:max-w-6xl w-full flex flex-col items-center justify-start text-3xl text-white font-semibold mx-8 sm:mx-16 sm:mx-32 relative z-10">
          <div class="w-full">
            <div id="work" class="font-medium text-xl text-logo border-b border-logo" style="line-height: 0.1em; margin-left: 11.5rem">
              <p style="margin-left: -11.5rem">Where I've Worked</p>
            </div>
            <div class="w-full flex flex-col md:flex-row items-center justify-center pt-8">
              <div class="font-normal text-gray-600 text-lg w-full md:pr-8 pb-8 md:pb-0 lg:px-8 lg pt-8">
                <div class="wrapper relative w-full bg-light overflow-hidden">
                  <transition-group name="slide" tag="div">
                    <div v-if="experienceTab == -1" key="table" class="absolute w-full transition duration-150 ease-in-out h-full">
                      <ul class="h-full">
                        <li id="workplace" class="h-1/5 pt-1 border-t border-l border-r border-logo rounded-t-lg" style="border-top-width: 1px; border-left-width: 1px; border-right-width: 1px;">
                          <button disabled class="h-full w-full block hover:bg-dark focus:outline-none focus:bg-dark transition duration-150 ease-in-out">
                            <div class="h-full px-4 py-4 flex items-center sm:px-6">
                              <div class="h-full min-w-0 flex-1 flex items-center justify-between">
                                <div class="h-full">
                                  <div class="h-full text-xl leading-5 font-medium text-logo truncate flex flex-row">
                                    <p>Banyan Security</p>
                                    <span class="hidden lg:block ml-1 pb-1 text-lg font-normal text-gray-300">
                                      - Software Engineering Intern
                                    </span>
                                  </div>
                                </div>
                                <div class="mt-4 text-gray-300  text-sm flex-shrink-0 sm:mt-0">
                                  <div class="hidden md:block flex overflow-hidden">
                                    <p>Incoming May 2020</p>
                                  </div>
                                </div>
                              </div>
                              <div class="ml-5 flex-shrink-0">
                                <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                  <!-- <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/> -->
                                </svg>
                              </div>
                            </div>
                          </button>
                        </li>
                        <li id="workplace" class="h-1/5 pt-1 border-t border-l border-r border-logo" style="border-top-width: 1px; border-left-width: 1px; border-right-width: 1px;">
                          <button @click="experienceTab = 1" class="h-full w-full block hover:bg-dark focus:outline-none focus:bg-dark transition duration-150 ease-in-out">
                            <div class="h-full px-4 py-4 flex items-center sm:px-6">
                              <div class="h-full min-w-0 flex-1 flex items-center justify-between">
                                <div class="h-full">
                                  <div class="h-full text-xl leading-5 font-medium text-logo truncate flex flex-row">
                                    <p>IBM</p>
                                    <span class="hidden lg:block ml-1 pb-1 text-lg font-normal text-gray-300">
                                      - Software Engineering Intern
                                    </span>
                                  </div>
                                </div>
                                <div class="mt-4 text-gray-300  text-sm flex-shrink-0 sm:mt-0">
                                  <div class="hidden md:block flex overflow-hidden">
                                    <p>Jan. 2020 - Present</p>
                                  </div>
                                </div>
                              </div>
                              <div class="ml-5 flex-shrink-0">
                                <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                                </svg>
                              </div>
                            </div>
                          </button>
                        </li>
                        <li id="workplace" class="h-1/5 pt-1 border-t border-l border-r border-logo" style="border-top-width: 1px; border-left-width: 1px; border-right-width: 1px;">
                          <button @click="experienceTab = 2" class="h-full w-full block hover:bg-dark focus:outline-none focus:bg-dark transition duration-150 ease-in-out">
                            <div class="h-full px-4 py-4 flex items-center sm:px-6">
                              <div class="h-full min-w-0 flex-1 flex items-center justify-between">
                                <div class="h-full">
                                  <div class="h-full text-xl leading-5 font-medium text-logo truncate flex flex-row">
                                    <p>IBM</p>
                                    <span class="hidden lg:block ml-1 pb-1 text-lg font-normal text-gray-300">
                                      - Site Reliability Engineering Intern
                                    </span>
                                  </div>
                                </div>
                                <div class="mt-4 text-gray-300  text-sm flex-shrink-0 sm:mt-0">
                                  <div class="hidden md:block flex overflow-hidden">
                                    <p>April 2019 - Jan. 2020</p>
                                  </div>
                                </div>
                              </div>
                              <div class="ml-5 flex-shrink-0">
                                <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                                </svg>
                              </div>
                            </div>
                          </button>
                        </li>
                        <li id="workplace" class="h-1/5 pt-1 border-t border-l border-r border-logo" style="border-top-width: 1px; border-left-width: 1px; border-right-width: 1px;">
                          <button @click="experienceTab = 3" class="h-full w-full block hover:bg-dark focus:outline-none focus:bg-dark transition duration-150 ease-in-out">
                            <div class="h-full px-4 py-4 flex items-center sm:px-6">
                              <div class="h-full min-w-0 flex-1 flex items-center justify-between">
                                <div class="h-full">
                                  <div class="h-full text-xl leading-5 font-medium text-logo truncate flex flex-row">
                                    <p>IBM</p>
                                    <span class="hidden lg:block ml-1 pb-1 text-lg font-normal text-gray-300">
                                      - DevOps Intern
                                    </span>
                                  </div>
                                </div>
                                <div class="mt-4 text-gray-300  text-sm flex-shrink-0 sm:mt-0">
                                  <div class="hidden md:block flex overflow-hidden">
                                    <p>Jan. 2019 - April 2019</p>
                                  </div>
                                </div>
                              </div>
                              <div class="ml-5 flex-shrink-0">
                                <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                                </svg>
                              </div>
                            </div>
                          </button>
                        </li>
                        <li id="workplace" class="h-1/5 pt-1 border border-logo rounded-b-lg" style="border-width: 1px;">
                          <button @click="experienceTab = 4" class="h-full w-full block hover:bg-dark focus:outline-none focus:bg-dark transition duration-150 ease-in-out">
                            <div class="h-full px-4 py-4 flex items-center sm:px-6">
                              <div class="h-full min-w-0 flex-1 flex items-center justify-between">
                                <div class="h-full">
                                  <div class="h-full text-xl leading-5 font-medium text-logo truncate flex flex-row">
                                    <p>OpenText</p>
                                    <span class="hidden lg:block ml-1 pb-1 text-lg font-normal text-gray-300">
                                      - Software Developer
                                    </span>
                                  </div>
                                </div>
                                <div class="mt-4 text-gray-300  text-sm flex-shrink-0 sm:mt-0">
                                  <div class="hidden md:block flex overflow-hidden">
                                    <p>May 2018 - Aug. 2018</p>
                                  </div>
                                </div>
                              </div>
                              <div class="ml-5 flex-shrink-0">
                                <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                                </svg>
                              </div>
                            </div>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div v-if="experienceTab == 0" key="BanyanMayPresent" class="absolute w-full flex h-full flex-col text-logo transition duration-150 ease-in-out h-full border rounded-lg border-logo" style="border-width: 1px;">
                      <div class="flex justify-between border-b border-logo" style="border-bottom-width: 1px;">
                        <button @click="experienceTab = -1" class="text-md border-r border-logo p-4 rounded-t-lg hover:bg-dark" style="border-right-width: 1px;">
                          <i class="fas fa-angle-left"></i>
                          Back
                        </button>
                        <p class="font-medium text-normal sm:text-xl md:text-2xl p-4 text-gray-300">
                          Software Engineering Intern @ <a href="https://banyansecurity.io" class="text-logo hover:underline">Banyan Security</a>
                        </p>
                      </div>
                      <div class="text-gray-300 flex overflow-scroll justify-start items-start px-4 sm:px-8 py-2 sm:py-4 font-base text-base md:text-lg">
                        <ul class="list-disc px-1 pl-2 pb-4">
                          <li>
                            Worked on implementing new features for a Zero-Trust reverse proxy, with a focus on security and ease of use.
                          </li>
                          <li>
                            Implemented the ACME Protocol for use with an internal PKI as well as for issuing certificates with Let's Encrypt.
                          </li>
                          <li>
                            Utilized Go and employed concepts from Kubernetes to add clustering support to the reverse proxy.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div v-if="experienceTab == 1" key="IBMJanPresent" class="absolute w-full flex h-full flex-col text-logo transition duration-150 ease-in-out h-full border rounded-lg border-logo" style="border-width: 1px;">
                      <div class="flex justify-between border-b border-logo" style="border-bottom-width: 1px;">
                        <button @click="experienceTab = -1" class="text-md border-r border-logo p-4 rounded-t-lg hover:bg-dark" style="border-right-width: 1px;">
                          <i class="fas fa-angle-left"></i>
                          Back
                        </button>
                        <p class="font-medium text-normal sm:text-xl md:text-2xl p-4 text-gray-300">
                          Software Engineering Intern @ <a href="https://ibm.com" class="text-logo hover:underline">IBM</a>
                        </p>
                      </div>
                      <div class="text-gray-300 flex overflow-scroll justify-start items-start px-4 sm:px-8 py-2 sm:py-4 font-base text-base md:text-lg">
                        <ul class="list-disc px-1 pl-2 pb-4">
                          <li>
                            Designed and shipped a complete browser-based development environment which includes access to an IDE, Kubernetes and OpenShift clusters, and a container registry.
                          </li>
                          <li>
                            Employed TypeScript, Helm, and Redis to create scalable containerized microservices for provisioning and managing user environments in multi-tenant Kubernetes clusters for more than 1.6 million users.
                          </li>
                          <li>
                            Implemented dynamic overprovisioning by employing a custom version of the cluster autoscaler and customized horizontal pod scaling patterns which reduced loading times for user environmentsby 85% and monthly operating costs by 72%.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div v-if="experienceTab == 2" key="IBMAprilJan" class="absolute w-full flex h-full flex-col text-logo transition duration-150 ease-in-out h-full border rounded-lg border-logo" style="border-width: 1px;">
                      <div class="flex justify-between border-b border-logo" style="border-bottom-width: 1px;">
                        <button @click="experienceTab = -1" class="text-md border-r border-logo p-4 rounded-t-lg hover:bg-dark" style="border-right-width: 1px;">
                          <i class="fas fa-angle-left"></i>
                          Back
                        </button>
                        <p class="font-medium text-normal sm:text-xl md:text-2xl p-4 text-gray-300">
                          Site Reliability Engineering Intern @ <a href="https://ibm.com" class="text-logo hover:underline">IBM</a>
                        </p>
                      </div>
                      <div class="text-gray-300 flex overflow-scroll justify-start items-start px-4 sm:px-8 py-2 sm:py-4 font-base text-base md:text-lg">
                        <ul class="list-disc px-1 pl-2 pb-4">
                          <li>
                            Orchestrated the redesign and migration of existing Rancher-based tooling to Kubernetes to improve user launch times by 46%, service 300K new users, and reduce operating costs by 15%.
                          </li>
                          <li>
                            Coordinated the entire development lifecycle of an Open Source Ruby Gem for the management of OpenShift and Kubernetes clusters, which is currently being used to service 3.5 million learnersat companies like Shell, Disney, Redhat, Scotiabank, and RBC.
                          </li>
                          <li>
                            Transitioned team to practice Infrastructure as Code by using Helm, Terraform, and Ansible for automatic provisioning, syncing, and testing of our team’s production and staging environments.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div v-if="experienceTab == 3" key="IBMJanApril" class="absolute w-full flex h-full flex-col text-logo transition duration-150 ease-in-out h-full border rounded-lg border-logo" style="border-width: 1px;">
                      <div class="flex justify-between border-b border-logo" style="border-bottom-width: 1px;">
                        <button @click="experienceTab = -1" class="text-md border-r border-logo p-4 rounded-t-lg hover:bg-dark" style="border-right-width: 1px;">
                          <i class="fas fa-angle-left"></i>
                          Back
                        </button>
                        <p class="font-medium text-normal sm:text-xl md:text-2xl p-4 text-gray-300">
                          DevOps Intern @ <a href="https://ibm.com" class="text-logo hover:underline">IBM</a>
                        </p>
                      </div>
                      <div class="text-gray-300 flex overflow-scroll justify-start items-start px-4 sm:px-8 py-2 sm:py-4 font-base text-base md:text-lg">
                        <ul class="list-disc px-1 pl-2 pb-4">
                          <li>
                            Researched and developed scalable, fault-tolerant computing and networking infrastructures for production-ready OpenShift clusters on Bare Metal, VMWare vSphere, Digital Ocean, and IBM Cloud.
                          </li>
                          <li>
                            Documented an example install process for OpenShift 4 on VMWare vSphere and Bare Metal, which was used by 7 teams at IBM, Cisco Networks, and the US Armed Forces.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div v-if="experienceTab == 4" key="OpenText" class="absolute w-full flex h-full flex-col text-logo transition duration-150 ease-in-out h-full border rounded-lg border-logo" style="border-width: 1px;">
                      <div class="flex justify-between border-b border-logo" style="border-bottom-width: 1px;">
                        <button @click="experienceTab = -1" class="text-md border-r border-logo p-4 rounded-t-lg hover:bg-dark" style="border-right-width: 1px;">
                          <i class="fas fa-angle-left"></i>
                          Back
                        </button>
                        <p class="font-medium text-normal sm:text-xl md:text-2xl p-4 text-gray-300">
                          Software Developer @ <a href="https://www.opentext.com" class="text-logo hover:underline">OpenText</a>
                        </p>
                      </div>
                      <div class="text-gray-300 flex overflow-scroll justify-start items-start px-4 sm:px-8 py-2 sm:py-4 font-base text-base md:text-lg">
                        <ul class="list-disc px-1 pl-2 pb-4">
                          <li>
                            Applied Python, PyWinAuto, and Selenium to develop a custom Automated UI Testing Framework which successfully reduced faulty crashes and saved over 300 Compute-Hours per week.
                          </li>
                          <li>
                           Led the design and implementation of a Predictive AI using Tensorflow and SciKit to understand automated testing crashes and highlight culpable commits which decreased debugging times by 30-40%.
                          </li>
                          <li>
                            Employed Node.js to create a REST API for modifying, training, and using the AI over a web interface.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </transition-group>
                </div>
              </div>
            </div>
          </div>
          <span id="workplace" class="inline-flex rounded-md shadow-lg mt-12">
            <a href="/shivanshvijresume.pdf">
              <button type="button" class="inline-flex items-center px-8 py-4 border border-logo text-lg leading-5 font-base rounded-md text-logo hover:underline hover:bg-dark focus:outline-none focus:border-white focus:shadow-outline-white transition ease-in-out duration-150">
                Check out my Resume
              </button>
            </a>
          </span>
        </div>
      </div>
    </div>
    <div class="h-full w-full">
      <div class="w-full flex items-center justify-center p-4 mb-16 md:mb-40">
        <div class="max-w-screen md:max-w-6xl w-full flex flex-col items-center justify-start text-3xl text-white font-semibold mx-8 sm:mx-16 sm:mx-32 relative z-10">
          <div class="w-full">
            <div id="build" class="font-medium text-xl text-logo border-b border-logo" style="line-height: 0.1em; margin-left: 13rem">
              <p style="margin-left: -13rem">Some Things I've Built</p>
            </div>
            <div class="font-sans text-lg w-full h-full">
              <div class="container center">
                <div class="card">
                  <div class="imgBx">
                    <a href="https://lynk.sh"><img src="~/assets/images/lynkWebsite.png" class="outline card-outline" alt="Lynk"></a>
                  </div>
                  <div class="contentBx">
                    <div class="content">
                      <h2>Lynk</h2>
                      <p class="text-gray-300 text-base font-normal">
                        Lynk is built on a secure reverse tunneling protocol which allows developers to securely expose their local TCP or HTTP services to the internet. 
                        By extending the functionality provided by raw TCP sockets and integrating the newest technologies, like HTTP/2, Lynk is able to achieve 6x the performance that other
                        similar services can.
                        <br><br>
                        I started Lynk in December 2019 as a side project, but it has quickly grown to support more than 5000+ users. Since then I've been able to add awesome 
                        new features like Websocket support, and custom domain names. I built Lynk completely from scratch, the frontend, the backend, and the client application.
                      </p>
                      <a class="hover:bg-dark font-light" href="https://lynk.sh">Check out Lynk</a>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="imgBx">
                    <a href="https://parasite.sh"><img src="~/assets/images/parasiteWebsite.png" class="outline card-outline" alt="Lynk"></a>
                  </div>
                  <div class="contentBx">
                    <div class="content">
                      <h2>Parasite</h2>
                      <p class="text-gray-300 text-base font-normal">
                        Parasite is an Open Source NPM proxy server which allows you to intercept, record, and replay incoming HTTP and raw TCP traffic.
                        It also provides an optional web interface and API for managing the incoming requests and replaying them on demand. 
                        <br><br>
                        Parasite was initially designed to be a part of Lynk since a big feature that users wanted was request replay - similar to what Ngrok provides. 
                        However, I quickly realized that Parasite would be much more useful as an open source package so that other users could easily embed it into 
                        their projects. Today, Parasite can be injected into any Node.js project with just 2 lines of code. 
                      </p>
                      <a class="hover:bg-dark font-light" href="https://parasite.sh">Check out Parasite</a>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="imgBx">
                    <a href="https://rubygems.org/gems/ruby-kubernetes-controller"><img src="~/assets/images/rubyGemsWebsite.png" class="outline card-outline" alt="Lynk"></a>
                  </div>
                  <div class="contentBx">
                    <div class="content">
                      <h2>Ruby Kubernetes Controller</h2>
                      <p class="text-gray-300 text-base font-normal">
                        Ruby Kubernetes Controller is an open source Ruby Gem which allows users to interact with the core Kubernetes APIs natively from within their Ruby applications. 
                        <br><br>
                        This project was concieved during my internship at IBM because we required the ability to patch Ingress controllers from within a Rails application so we could create dynamic routes. 
                        The issue was, patching ingresses was so new that no existing libraries supported it. Those existing libraries also didn't support OpenShift out of the box, so we decided 
                        to create our own. This library is currently being used to service 3.5 million learners at companies like Shell, Disney, Redhat, Scotiabank, and RBC.
                      </p>
                      <a class="hover:bg-dark font-light" href="https://rubygems.org/gems/ruby-kubernetes-controller">Check it out on RubyGems.org</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <foot class="relative z-20" />
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
      scrolled: false,
      experienceTab: -1,
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
    ScrollReveal().reveal('#about', { delay: 300 })
    ScrollReveal().reveal('#work', { delay: 300 })
    ScrollReveal().reveal('#workplace', { delay: 300 })
    ScrollReveal().reveal('#built', { delay: 300 })
    ScrollReveal().reveal('.card', { delay: 300 })
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
  transition: all 0.2s;
  box-shadow: 16px 16px 0 -1px #13182A, 16px 16px 0 0 #dc6333;
  -webkit-border-radius: 0.5rem;
  -moz-border-radius: 0.5rem;
  border-radius: 0.5rem;
}

.wrapper {
  height: 20rem;
}

.slider {
  left: -100%
}

.wrapper:hover .slider {
  transition: 1s;
  left: 0;
}

.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}

.container {
  position: relative;
  flex-wrap: wrap;
  padding-top: 2rem;
}

.card {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 100px 0;
}

.card:nth-child(odd) {
  flex-direction: row;
}

.card:nth-child(even) {
  flex-direction: row-reverse;
  text-align: right;
}

.card:nth-child(even) .imgBx {
  left: -25px;
}

.card .imgBx {
  position: relative;
  left: 25px;
  width: 500px;
  height: 400px;
  z-index: 1;
}

.card .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.card .contentBx {
  position: relative;
  right: 25px;
  width: 600px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 60px 20px 100px;
}

.card:nth-child(even) .contentBx {
  right: -25px;
  padding: 20px 100px 20px 60px;
}

.card .contentBx:before {
  content: '';
  position: absolute;
  top: -50px;
  bottom: -50px;
  left: 0;
  right: 0;
  border: 1px solid #DC6333;
  border-radius: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  z-index: -1;
}

.card .content h2 {
  font-size: 1.5em;
}

.card .content p {
  margin-top: 10px;
}

.card .content a {
  display: inline-block;
  margin-top: 15px;
  color: #DC6333;
  text-decoration: none;
  padding: 10px;
  border: 1px solid #DC6333;
  border-radius: 0.5rem;
}

@media (max-width: 1000px) {
  .card {
    flex-direction: column;
    margin: 25px;
  }
  
  .card .imgBx {
    width: 400px;
    height: 300px;
    left: 0;
  }
  
  .card .contentBx {
    width: 100%;
    height: auto;
    right: 0;
    padding: 30px;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .card .contentBx:before {
    top: 0;
    bottom: 0;
    margin-bottom: 0;
    margin-top: 0;
  }
  
  .card:nth-child(even) .imgBx {
    left: 0;
  }
  
  .card:nth-child(even) .contentBx {
    right: 0;
    padding: 30px;
  }

  .card .imgBx img {
    margin-top: -2rem;
  }

  .card-outline {
    box-shadow: 8px 8px 0 -1px #13182A, 8px 8px 0 0 #dc6333;
  }
}

.card-outline:hover {
  box-shadow: 6px 6px 0 -1px #13182A, 6px 6px 0 0 #dc6333;
}
</style>