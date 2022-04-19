<template>
  <cmpListeleme :elemanlar="elemanlarList" />
</template>

<script>
import cmpListeleme from "@/components/Listeleme.vue";

export default {
  components: {
    cmpListeleme,
  },
  data() {
    return {
      elemanlarList: [],
    };
  },
  async mounted() {
    await fetch("http://localhost:3002/api/bilgiler")
      .then((response) => {
        if (response.status === 200) {
          console.warn("Response - ", response);
          /**
           * BackEnd den yolladığımız response u json formatında yollasak da,
           * bu nesne bütün http yanıtını içerir (21. satırı tarayıcı konsolunda görebilirsiniz),
           * bizim ihtiyacımız olan veriler response nesnesinin body özelliğinde taşınıyor.
           * body gövdesine ulaşabilmemiz için response.json() kullanıyoruz.
           * 
           * 
           * *** Bu kısmın üzerinden ilk derste geçilecek anlayamazsanız panik yapmayın.****
           *      
           * 
           * fetch işlemi tamamlandıktan sonra then (sonra) ilk then bloğu çalışır,
           * ilk then bloğu tamamlandıktan sonra ikinci then bloğu çalışır. Buna göre;
           * backend end point de bulunan kaynağı fetch et(bu tamamlanana kadar bekle -await-),
           * fetch ettikten sonra aldığın response nesnesini argüman olan metod ile status 200 ise
           * response nesnesinin body gövdeisni sonraki then bloğuna gönder. 
           * ikinci then bluğu da ilk bloktan aldığı body gövesini parametre olarak alan metod ile
           * (bu elemanlar backend den json nesneler dizi olarak gönderildi) elemanlarList vue
           * özelliğine backend den gönderilen resData nesnesini atadık ve vue geri kalanı yaptı. 
           * ********************************************************************************* 
           */
          return response.json();
        }
      })
      .then((data) => {
        console.log(data.resData);
        this.elemanlarList = data.resData;
      });
  },
};
</script>

<style>
</style>