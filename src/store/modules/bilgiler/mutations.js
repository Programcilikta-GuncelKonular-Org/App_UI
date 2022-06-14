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
    const online = state.onlineKullanicilar;
    state.onlineKullanicilar = online.filter((kullanici) => {
      return kullanici.sId != payload.sId;
    });
  },
  GirisYapanlariDuzenle(state, payload) {
    payload.kullanicilar.forEach((kisi) => {
      state.onlineKullanicilar.push(kisi.data);
    });
  },
};
