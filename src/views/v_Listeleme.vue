<template>
  <h1 v-show="bilgiVarMi">Görüntülenecek bilgi yok</h1>
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
  methods: {
    async paylasimlariAl() {
      try {
        await this.$store.dispatch("bilgiler/BilgileriAl");
        /**
         * getter kullanımı
         * */
        this.elemanlarList = this.$store.getters["bilgiler/paylasimlariGetir"];
        // this.elemanlarList = this.$store.state.bilgiler.storePaylasimlar;
      } catch (err) {
        console.log("hata oluştu - ", err);
        alert("Hata oluştu\n" + err);
      }
    },
  },
  mounted() {
    //lifecycle hooks
    this.paylasimlariAl();
  },
  computed: {
    bilgiVarMi() {
      return this.$store.getters["bilgiler/paylasimlarGeldimi"];
    },
  },
};
</script>

<style scoped>
h1 {
  color: white;
  text-align: center;
}
</style>