export default {
  PaylasimDepola(state, payload) {
    if (payload && payload.status === 200) {
      state.hataObj = {};
      state.storePaylasimlar = payload.resData;
    }
  },
  OnlineKullanicilarDepola(state, payload) {
    state.onlineKullanicilar.push(payload);
  },
  OnlineKullanicilarDuzenle(state, payload) {
    // console.log("mutation disconnect - ", payload);
    const online = state.onlineKullanicilar;
    state.onlineKullanicilar = online.filter((kullanici) => {
      return kullanici.sId != payload.sId;
    });
  },
};
