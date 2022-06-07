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
    })
    .catch((err) => {
      throw new Error(err);
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
