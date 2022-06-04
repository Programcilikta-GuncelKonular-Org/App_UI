import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const localKullanici = JSON.parse(localStorage.getItem("kullanici"));
const baslangicDegeri = localKullanici ? localKullanici : null;

// if (localKullanici) {
//   baslangicDegeri = localKullanici;
// } else {
//   baslangicDegeri = null;
// }

export default {
  namespaced: true,
  state() {
    return {
      kullanici: baslangicDegeri, //{}=> boş da olsa bir instance var demek, bu şaşırtıyordu
      hataObj: { status: "", mesaj: "" },
    };
  },
  mutations,
  actions,
  getters,
};
