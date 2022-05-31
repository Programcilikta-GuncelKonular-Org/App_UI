import { girisYap } from "@/services/authService.js";

export default {
  async KullaniciGirisi(context) {
    console.log("context", context);
    await girisYap(context)
      .then((resKullanici) => {
        console.info("actions kullanıcı - ", resKullanici);
        context.commit("KullaniciDepola", resKullanici);
      })
      .catch((err) => {
        console.log("actions hata - ", err.resData);
        throw Error(err.resData);
      });
  },
};
