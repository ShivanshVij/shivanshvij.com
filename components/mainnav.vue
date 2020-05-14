<template>
  <nav class="bg-light font-sans">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center justify-end w-full mt-2">
          <div class="flex-shrink-0 flex items-center float-left md:w-full mt-2">
            <img class="block h-8 w-auto" src="~/assets/images/cleanLogo.png" alt="Logo" />
          </div>
          <div class="flex-1 -ml-2 mr-2 flex items-center md:hidden justify-end float-right">
          </div>
        </div>
        <div class="flex items-center">
          <span class="inline-flex rounded-md shadow-lg mr-4 mt-4">
            <nuxt-link to="/blog">
              <button type="button" class="inline-flex items-center px-4 py-2 border border-logo text-sm leading-5 font-medium rounded-md text-logo hover:underline hover:bg-dark focus:outline-none focus:border-white focus:shadow-outline-white transition ease-in-out duration-150">
                Blog
              </button>
            </nuxt-link>
          </span>
          <span class="inline-flex rounded-md shadow-lg mt-4">
            <a href="/shivanshvijresume.pdf">
              <button type="button" class="inline-flex items-center px-4 py-2 border border-logo text-sm leading-5 font-medium rounded-md text-logo hover:underline hover:bg-dark focus:outline-none focus:border-white focus:shadow-outline-white transition ease-in-out duration-150">
                Resume
              </button>
            </a>
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data () {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu
    }
  }
};
</script>