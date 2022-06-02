const BASE_URL = "http://localhost:8080/";

const girisYap = async (p_kullanici) => {
  return await fetch(`${BASE_URL}api/giris`, { //retun unutuldu :|
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      kAdi: p_kullanici.kAdi,
      sifre: p_kullanici.sifre,
    }),
  })
    .then(async (response) => {
      const data = await response.json();
      return data;
    })
    .catch((err) => {
      console.log("servis - ", err.response);
      throw err.response;
    });
};

export { girisYap };
