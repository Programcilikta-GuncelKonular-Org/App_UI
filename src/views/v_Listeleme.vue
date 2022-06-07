<template>
  <h1 v-show="bilgiVarMi">Görüntülenecek bilgi yok</h1>
  <button
    type="button"
    class="btn btn-secondary mb-2"
    v-if="adminMi"
    data-bs-toggle="modal"
    data-bs-target="#girisModal"
  >
    <i class="bi bi-bag-plus-fill"> Ekle</i>
  </button>
  <cmpListeleme :elemanlar="elemanlarList" />
  <div
    class="modal fade"
    id="girisModal"
    tabindex="-1"
    aria-labelledby="girisModal"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Bilgi Girişi</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="bilgiyiGönder;">
            <div class="input-group">
              <textarea
                class="form-control"
                aria-label="With textarea"
                v-model="inputBilgiMetni"
              ></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Kapat
          </button>
          <button
            type="submit"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="bilgiyiGönder"
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>
  </div>
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
      goruntule: false,
      inputBilgiMetni: "",
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

    bilgiyiGönder() {
      console.warn(this.inputBilgiMetni);
      this.$store.dispatch("bilgiler/BilgiEkle", this.inputBilgiMetni);
      this.inputBilgiMetni = "";
      this.paylasimlariAl();
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
    adminMi() {
      return this.$store.getters["auth/kullaniciAdminMi"];
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