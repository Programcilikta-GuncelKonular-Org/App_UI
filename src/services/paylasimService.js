const BASE_URL = "http://localhost:8080/";
import headerUret from "@/helpers/headerOlustur.js";

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

export { paylasimlariGetir };
