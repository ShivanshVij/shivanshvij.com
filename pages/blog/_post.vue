<template>
  <div class="relative h-full w-full max-w-full bg-dark font-sans">
    <navbar :back="true"/>
    <div class="lg:px-32 w-full flex items-center justify-center">
      <div class="max-w-6xl flex items-center justify-center w-full">
        <div class="p-8 pt-16 flex flex-col items-center justify-center text-center w-full">
          <p class="font-medium text-xl text-logo">{{ post.data.category.toUpperCase() }}</p>
          <p class="p-8 font-medium text-4xl text-gray-100 break-words">{{ post.data.title[0].text }}</p>
          <p class="p-4 pt-0 font-base text-base text-gray-400">{{ (new Date(post.last_publication_date)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
          <img class="max-w-full" :src="post.data.hero.url">
          <div class="p-8 text-left font-base text-2xl text-gray-100 max-w-full">
            <prismic-rich-text :field="post.data.content"/>
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

import hljs from 'highlight.js';

export default {
  components: {
    navbar,
    foot
  },
  data() {
    return {
    }
  },
  async asyncData({ route, redirect }) {
    const api = await Prismic.getApi(PrismicConfig.apiEndpoint);
    const post = await api.getByUID('post', route.params.post);
    if(!post) {
      redirect(404, "/blog");
    }
    hljs.initHighlightingOnLoad();
    return { 
      post,
    };
  },
  methods: {
  }
};
</script>

<style>
.break {
  border: 0;
  margin-top: 1rem;
  margin-bottom: 3rem;
  text-align: center;
}
.break:before {
  content: "\2022 \2022 \2022";
}
</style>