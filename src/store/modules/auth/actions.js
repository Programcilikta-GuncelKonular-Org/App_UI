import { girisYap } from "@/services/authService.js";

export default {
  async KullaniciGirisi(context, kullanıcı) {
    await girisYap(kullanıcı)
      .then((resKullanici) => {
        console.log("actions - ", resKullanici);
        context.commit("KullaniciDepola", resKullanici);
      })
      .catch((err) => {
        console.log("actions hata - ", err);
        throw err;
      });
  },
};
