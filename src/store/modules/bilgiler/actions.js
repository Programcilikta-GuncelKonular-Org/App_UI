import { paylasimlariGetir, paylasimEkle } from "@/services/paylasimService.js";

export default {
  async BilgileriAl(context) {
    await paylasimlariGetir()
      .then((responseData) => {
        context.commit("PaylasimDepola", responseData);
      })
      .catch((err) => {
        context.commit("PaylasimDepola", err);
        throw err;
      });
  },
  async BilgiEkle(_, param) {
    console.log("action - ", param);
    await paylasimEkle(param)
      .then((response) => {
        console.log("response kayıt - ", response);
      })
      .catch((err) => {
        console.log(err.response.data.hataMesaji);
        throw err.response.data.hataMesaji;
      });
  },
};
