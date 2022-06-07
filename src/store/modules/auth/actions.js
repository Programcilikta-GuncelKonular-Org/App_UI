import { girisYap } from "@/services/authService.js";

export default {
  async KullaniciGirisi(context, kullanıcı) {
    await girisYap(kullanıcı)
      .then((resKullanici) => {
        console.log("response - ", resKullanici);
        context.commit("KullaniciDepola", resKullanici); //mutasyon çağırma
        localStorage.setItem("kullanici", JSON.stringify(resKullanici.data.mesaj));
      })
      .catch((err) => {
        console.log("actions hata - ", err);
        throw err;
      });
  },
};
