import Vue from "vue";
import App from "./App.vue";

import myRouter from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  router: myRouter,
  render: h => h(App)
}).$mount("#app");
