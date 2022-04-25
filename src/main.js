import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Toast from "vue-toastification";

import "vue-toastification/dist/index.css";

Vue.config.productionTip = false;

Vue.use(Toast, { maxToasts: 3 });

new Vue({
  router,
  store,
  vuetify,

  render: function (h) {
    return h(App);
  },
}).$mount("#app");
