import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import NavBar from "@/components/layout/NavBar.vue";
import Card_v from "@/components/ui/Card";
import OnlineKullanicilar from "@/components/OnlineKullanicilar";

import io from "socket.io-client";

const app = createApp(App);
app.config.globalProperties.$socketio = io("http://localhost:8090");

app
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("NavBar", NavBar)
  .component("CardView", Card_v)
  //aktif kulanıcı component i
  .component("AktifKull", OnlineKullanicilar)
  .mount("#app");
