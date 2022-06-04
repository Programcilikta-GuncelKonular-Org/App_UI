const BASE_URL = "http://localhost:8080/";
import axios from "axios";

const girisYap = async (p_kullanici) => {
  return await axios
    .post(`${BASE_URL}api/giris`, p_kullanici)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err.response.data.mesaj;
    });

  // return await fetch(`${BASE_URL}api/giris`, {
  //   //retun unutuldu :|
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     kAdi: p_kullanici.kAdi,
  //     sifre: p_kullanici.sifre,
  //   }),
  // })
  //   .then(async (response) => {
  //     const data = await response.json();

  //     if (response.status != 200) {
  //       throw data;
  //     }

  //     return data;
  //   })
  //   .catch((err) => {
  //     console.log("servis - ", err);
  //     throw err.response;
  //   });
};

export { girisYap };
