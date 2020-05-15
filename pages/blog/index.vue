<template>
  <div class="relative h-full w-full max-w-full bg-dark font-sans">
    <navbar/>
    <div class="w-full h-full flex items-center justify-center">
      <div class="p-8 h-full w-full max-w-6xl">
        <div class="flex flex-col">
          <nuxt-link :to="`/blog/${posts.results[0].uid}`" class="hover:bg-middle rounded-lg">
            <div class="flex flex-col md:flex-row items-center justify-center flex-wrap h-auto">
              <img class="md:flex-1 md:max-w-1/2 rounded-lg" :src="posts.results[0].data.hero.url">
              <div class="flex items-start flex-col justify-start md:flex-1 p-8">
                <div class="flex flex-col sm:flex-row text-gray-300">
                  <p class="font-semibold text-xl text-logo float-left mr-2">{{ posts.results[0].data.category.toUpperCase() }}</p>
                  <p class="font-base text-lg text-gray-300 float-right mt-px">{{ (new Date(posts.results[0].first_publication_date)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
                </div>
                <div class="block">
                  <p class="font-semibold text-3xl text-gray-300">{{ posts.results[0].data.title[0].text }}</p>
                  <p class="font-light text-lg text-gray-600 break-words">{{ posts.results[0].data.description[0].text }}</p>
                  <div>
                    <div class="ml-4 mt-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0">
                          <img class="h-12 w-12 rounded-full" src="https://s.gravatar.com/avatar/0b4c2aabb392b7e7e39b1d706d1164b7?s=80" alt="" />
                        </div>
                        <div class="ml-4">
                          <h3 class="text-lg leading-6 font-medium text-gray-100">
                            Shivansh Vij
                          </h3>
                          <p class="text-base text-md leading-6 text-gray-600">
                            Computer Engineering Student
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nuxt-link>
          <hr class="my-8 w-full border border-t border-white" />
          <div class="flex flex-row items-start justify-center lg:justify-start flex-wrap h-auto">
            <div class="hover:bg-middle rounded-lg w-full mx-0 md:mx-32 lg:mx-0 lg:w-1/3" v-for="post in posts.results" :key="post.uid" v-if="post.uid !== posts.results[0].uid">
              <nuxt-link :to="`/blog/${post.uid}`" class="w-full">
                <div class="flex items-start justify-start flex-row w-full rounded-lg">
                  <div class="flex items-start flex-col justify-start p-8">
                    <img class="flex flex-0 rounded-lg" :src="post.data.hero.url">
                    <div class="pt-4 text-gray-300 w-full">
                      <p class="font-semibold text-lg text-logo float-left mr-2">{{ post.data.category.toUpperCase() }}</p>
                      <p class="font-base text-base text-gray-300 float-left lg:float-right mt-px">{{ (new Date(post.first_publication_date)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
                    </div>
                    <div class="pt-4 block">
                      <p class="font-semibold text-xl text-gray-300">{{ post.data.title[0].text }}</p>
                      <p class="pt-2 font-light text-base text-gray-600 break-words">{{ post.data.description[0].text }}</p>
                    </div>
                  </div>
                </div>
              </nuxt-link>
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
import PrismicDom from "prismic-dom"
import PrismicConfig from "~/prismic.config.js";

import navbar from "~/components/navbar"
import foot from "~/components/foot"

export default {
  components: {
    navbar,
    foot
  },
  data() {
    return {
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
  }
};
</script>

<style scoped>
</style>