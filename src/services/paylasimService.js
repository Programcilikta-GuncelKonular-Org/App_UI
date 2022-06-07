const BASE_URL = "http://localhost:8080/";
import headerUret from "@/helpers/headerOlustur";
import axios from "axios";

const paylasimlariGetir = async () => {
  return await fetch(`${BASE_URL}api/bilgiler`, {
    headers: headerUret(),
  })
    .then(async (response) => {
      if (response.status === 200) {
        return await response.json(); //parse
      }
      else{
        throw await response.json(); //hata halinde login sayfasına yönlenmeli, yönelenebilmesi için hata yakalanmalı
      }
    })
    .catch((err) => {
      console.log("servis ", err);
      throw err.hataMesajı;
    });
};
const paylasimEkle = async (paylasim) => {
  // console.log("servis - ", paylasim);
  return await axios.post(
    `${BASE_URL}api/bilgiekle`,
    { bilgiMetni: paylasim, yapilanYorumlar: [], begeniler: [] },
    {
      headers: headerUret(),
    }
  );
};

export { paylasimlariGetir, paylasimEkle };
