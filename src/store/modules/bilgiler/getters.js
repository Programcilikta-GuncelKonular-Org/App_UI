export default {
  paylasimlariGetir(state) {
    return state.storePaylasimlar;
  },
  paylasimlarGeldimi(state) {
    return !!state.storePaylasimlar;
  },
};
