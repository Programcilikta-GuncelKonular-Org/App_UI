const BASE_URL = "http://localhost:8080/";

const girisYap = async (p_kullanici) => {
  await fetch(`${BASE_URL}api/giris`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      kAdi: p_kullanici.kAdi,
      sifre: p_kullanici.sifre
    }),
  })
    .then(async (response) => {
      const data = await response.json();
      console.log("Response data - ", data);
      return data;
    })
    .catch((err) => {
      console.log(err.response);
      return err.response;
    });
};

module.exports = { girisYap };
