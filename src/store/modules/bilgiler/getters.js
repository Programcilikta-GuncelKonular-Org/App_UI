export default {
  paylasimlariGetir(state) {
    return state.storePaylasimlar;
  },
  paylasimlarGeldimi(state) {
    return !state.storePaylasimlar.length > 0;
  },
  onlineKullanicilariAl(state) {
    return state.onlineKullanicilar;
  },
};
