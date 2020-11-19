import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import socketio from "socket.io-client";
import VueSocketIO from "vue-socket.io";
import VueAnalytics from "vue-analytics";
import VueSweetalert2 from 'vue-sweetalert2';

import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

Vue.use(VueAnalytics, {
  id: "UA-169986949-1",
  router,
});

Vue.config.productionTip = false;

const socket = socketio.connect("https://superawesome.ml/users", {
  query: {
    authorization: `${localStorage.token}`,
  },
});

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: socket,
  })
);

new Vue({
  router,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
