import { paylasimlariGetir, paylasimEkle } from "@/services/paylasimService.js";
import io from "socket.io-client";
const socket = io("http://localhost:8090");

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
    // console.log("action - ", param);
    await paylasimEkle(param)
      .then((response) => {
        console.log("response kayıt - ", response);
      })
      .catch((err) => {
        console.log(err.response.data.hataMesaji);
        throw err.response.data.hataMesaji;
      });
  },
  AdminSocketGiris(context) {
    socket.emit("adminGirisi", (response) => {
      console.log("adminGiris response - ", response);
    });
    socket.on("girisYapanKullanici", ({ data }) => {
      context.commit("OnlineKullanicilarDepola", data);
    });
    socket.on("cikisYapanKullanici", ({ data }) => {
      context.commit("OnlineKullanicilarDuzenle", data);
    });
    socket.on("girisYapmisKullanicilar", ({ data }) => {
      context.commit("GirisYapanlariDuzenle", data);
    });
  },
  KullaniciSockerGiris(context, kullaniciAdi) {
    socket.emit(
      "kullaniciGirisi",
      {
        data: {
          kAdi: kullaniciAdi,
        },
      },
      (response) => {
        console.log("kullanıcıSocketGiris response - ", response);
      }
    );

    // socket.on("disconnect", (response) => {
    //   console.log("çıkış yapan kullanıcı - ", response);
    // });
  },
};
