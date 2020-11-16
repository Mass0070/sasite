import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import socketio from "socket.io-client";
import VueSocketIO from "vue-socket.io";
import VueAnalytics from "vue-analytics";

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
