import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      storePaylasimlar: [],
      hataObj: { status: "", mesaj: "" },
      onlineKullanicilar: [],
    };
  },
  mutations,
  actions,
  getters,
};
