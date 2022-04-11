import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faEnvelope,
  faWhatsapp,
  faGithub,
  faLinkedin,
  faFacebookSquare,
  faInstagram,
  faTwitterSquare
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
