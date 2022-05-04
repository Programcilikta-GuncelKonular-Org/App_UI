import { paylasimlariGetir } from "@/services/paylasimService.js";

export default {
  async BilgileriAl(context) {
    await paylasimlariGetir()
      .then((responseData) => {
        context.commit("PaylasimDepola", responseData);
      })
      .catch((err) => {
        context.commit("PaylasimDepola", err);
        throw new Error(err);
      });
  },
};
