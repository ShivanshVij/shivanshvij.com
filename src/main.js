import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import("bulma/css/bulma.css");
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/brands.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';

require("particle.js");

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
