const BASE_URL = "http://localhost:8080/";

const paylasimlariGetir = async () => {
  return await fetch(`${BASE_URL}api/bilgiler`,{
    headers:{Authorization:"asdasıukdıaousdh"}
  })
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
