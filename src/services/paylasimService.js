const BASE_URL = "http://localhost:3002/";

const paylasimlariGetir = async () => {
  return await fetch(`${BASE_URL}api/bilgiler`)
    .then(async (response) => {
      if (response.status === 200) {
        const deneme = await response.json();
        console.warn(deneme);
        return await response.json(); //parse
      }
    })
    .catch((err) => {
      throw new Error(err);
    });
};

module.exports = { paylasimlariGetir };
