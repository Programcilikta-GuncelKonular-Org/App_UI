export default {
  girisYapildiMi(state) {
    return !!state.kullanici;
  },
  tokenAl(state) {
    return state.kullanici.tokens;
  },
  aktifKullaniciAl(state) {
    return state.kullanici.kAdi;
  },
  kullaniciAdminMi(state) {
    return state.kullanici.rol;
  }
};
