import { createStore } from "vuex";
import bilgilerModule from "./modules/bilgiler"
import authModule from "./modules/auth"

const store = createStore({
  modules: {
    bilgiler: bilgilerModule,
    auth: authModule
  },
});

export default store;
