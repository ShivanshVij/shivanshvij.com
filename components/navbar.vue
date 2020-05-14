<template>
  <nav class="bg-light font-sans">
      <div class="max-w-7xl mx-auto px-2">
        <div class="flex flex-row items-center justify-center h-16">
          <div v-if="back" class="hidden md:block md:flex-1 float-left p-8">
              <nuxt-link to="/blog">
                <p class="text-gray-500 font-medium text-lg hover:text-gray-300">
                    <i class="fas fa-arrow-left"></i> Back
                </p>
              </nuxt-link>
            </div>
          <div v-else class="hidden md:block md:flex-1 float-left p-8">
            <nuxt-link to="/">
                <p class="text-gray-500 font-medium text-lg hover:text-gray-300">
                    <i class="fas fa-arrow-left"></i> Home
                </p>
              </nuxt-link>
          </div>
          <div class="flex px-2">
            <nuxt-link v-if="back" to="/blog" class="flex-shrink-0 flex items-center my-2">
              <img class="block h-8 w-auto" :class="{ 'mr-1': back, 'lg:mr-3': back }" src="~/assets/images/cleanLogo.png" alt="Logo" />
            </nuxt-link>
            <nuxt-link v-else to="/" class="flex-shrink-0 flex items-center my-2">
              <img class="block h-8 w-auto" :class="{ 'mr-1': back, 'lg:mr-3': back }" src="~/assets/images/cleanLogo.png" alt="Logo" />
            </nuxt-link>
          </div>
          <div v-if="back" class="ml-12 flex-1 flex items-center justify-end pl-2 pr-1 w-auto float-right">
            <button class="ml-1 p-1 border-2 border-transparent text-gray-700 rounded-full hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out">
                <a href="https://github.com/shivanshvij">
                  <i class="text-gray-600 hover:text-gray-200 text-4xl fab fa-github-square"></i>
                </a>
            </button>
            <button class="p-1 border-2 border-transparent text-gray-700 rounded-full hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out">
                <a href="https://twitter.com/confusedqubit">
                  <i class="text-gray-600 hover:text-gray-200 text-4xl fab fa-twitter-square"></i>
                </a>
            </button>
            <button class="p-1 pr-0 border-2 border-transparent text-gray-700 rounded-full hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out">
                <a href="https://linkedin.com/in/shivanshvij">
                  <i class="text-gray-600 hover:text-gray-200 text-4xl fab fa-linkedin"></i>
                </a>
            </button>
          </div>
          <div v-else class="flex-0 md:flex-1 flex items-center justify-end pl-2 pr-1 ml-4 md:ml-0 w-auto float-right">
            <div class="max-w-lg w-full lg:max-w-xs" v-on-clickaway="cleanSearch">
              <label for="search" class="sr-only">Search</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <img v-if="searchLoading" class="h-5 w-5 text-gray-400" src="~/assets/images/grid.svg" />
                  <i v-else class="text-gray-400 fas fa-search"></i>
                </div>
                <input @input="search" v-model="query" id="search" class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-dark placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 text-gray-400 sm:text-sm transition duration-150 ease-in-out" placeholder="Search" />
                <div v-if="hits.length > 0" class="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg z-20">
                  <div class="rounded-md bg-light border border-gray-200">
                    <div class="py-1">
                      <a v-for="hit in hits" :key="hit.objectID" @click="cleanSearch()" class="block px-4 py-2 text-sm leading-5 text-gray-400 hover:bg-dark focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                        <p class="text-base font-semibold truncate sm:break-normal">{{ hit.name }}</p>
                        <p class="text-sm font-base truncate">{{ hit.description }}</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="ml-1 p-1 border-2 border-transparent text-gray-700 rounded-full hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out">
                <a href="https://github.com/shivanshvij">
                  <i class="text-gray-600 hover:text-gray-200 text-4xl fab fa-github-square"></i>
                </a>
            </button>
            <button class="p-1 border-2 border-transparent text-gray-700 rounded-full hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out">
                <a href="https://twitter.com/confusedqubit">
                  <i class="text-gray-600 hover:text-gray-200 text-4xl fab fa-twitter-square"></i>
                </a>
            </button>
            <button class="p-1 pr-0 border-2 border-transparent text-gray-700 rounded-full hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out">
                <a href="https://linkedin.com/in/shivanshvij">
                  <i class="text-gray-600 hover:text-gray-200 text-4xl fab fa-linkedin"></i>
                </a>
            </button>
          </div>
        </div>
      </div>
    </nav>
</template>
<script>
import { mixin as clickaway } from 'vue-clickaway';
import algoliasearch from 'algoliasearch';
import _ from 'lodash';
export default {
  mixins: [ clickaway ],
  props: {
    back: {
        type: Boolean,
        default: false
    }
  },
  data() {
    return {
        searchClient: algoliasearch('7DT2ERS37F','87eeebe61b2a7fd1f144c9a57bad93bd').initIndex('parasite-docs'),
        query: '',
        hits: [],
        searchLoading: false,
    }
  },
  methods: {
    search() {
      var self = this;
      if(this.query.length < 1) {}
      else {
        this.searchLoading = true;
        this.searchClient.search(this.query).then(({ hits }) => {
          self.searchLoading = false;
          self.hits = hits;
        });
      }
    },
    cleanSearch() {
      this.search = false;
      this.query = '';
      this.hits = [];
    },
  },
  created () {
    this.search = _.debounce(this.search, 700)
  }
};
</script>