const BASE_URL = "http://localhost:9000/";

const paylasimlariGetir = async () => {
  return await fetch(`${BASE_URL}api/bilgiler`)
    .then(async (response) => {
      if (response.status === 200) {
        return await response.json();//parse
      }
    })
    .catch((err) => {
      throw new Error(err);
    });
};

module.exports = { paylasimlariGetir };
