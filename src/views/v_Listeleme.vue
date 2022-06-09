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
  <!-- 
    kullanıcı hata aldıktan sora kapat butonuna basmadan modalı kapattığında 
    bir sonraki modalı açtığında hata mesajını görüntülüyordu
    back drop işlemini yakalayacak metodu bulmak için vakit harcamak yerine 
    data-bs-backdrop="static" ile modal sadece kapat butonu ile kapanabilir hale getirildi 
  -->
  <div
    class="modal fade"
    id="girisModal"
    tabindex="-1"
    aria-labelledby="girisModal"
    aria-hidden="false"
    data-bs-backdrop="static"
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
          <form @submit.prevent="bilgiyiGönder()">
            <div class="input-group">
              <textarea
                class="form-control"
                aria-label="With textarea"
                v-model="inputBilgiMetni"
              ></textarea>
            </div>
          </form>
          <p class="m-2" v-if="hata">{{ hata }}</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            @click="modalTemizle()"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Kapat
          </button>
          <button
            type="submit"
            @click="bilgiyiGönder()"
            class="btn btn-primary"
            :data-bs-dismiss="modal"
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
      modal: "",
      hata: "",
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
        localStorage.removeItem("kullanici");
        this.$router.push("/login");
      }
    },

    bilgiyiGönder() {
      /**
       * bilgiMetni boş kontrolü front-end tarafında yapılmamışsa
       * back-end tarafından dönen hatayı yakalanmalı
       *
       * hata adındaki property ye hata mesajı atanarak kullanıcıya gösterilmiş oldu
       * kullanıcı boş paylaşım yapıp hata aldıktan sonra kapat butonuna tıklayıp
       * modalı kapttığında, bir sonraki modalı açtığında hata mesajını görmemesi için
       * hata property si temizlenmeli (121. satırdaki metod)
       *
       * kullanıcı bilgi baylaşırken sürece ara verdi ve kapat butonuna tıklayarak modalı kapattı,
       * bir sonraki sefere modalı temiz görmesi için
       * bilgiMetni property sinin içi temizlenmei (121. satırdaki metod)
       */

      this.$store
        .dispatch("bilgiler/BilgiEkle", this.inputBilgiMetni)
        .then(() => {
          this.modal = "modal"; // modal kapatması için ikinciye butona basılması gereiyor???
          this.paylasimlariAl();
          this.modalTemizle();
        })
        .catch((err) => {
          console.log("comp hata - ", err);
          this.modal = "";
          this.hata = err + "\n Boş paylaşım yapmadığınızdan emin olun.";
        });
    },
    modalTemizle() {
      this.hata = "";
      this.inputBilgiMetni = "";
    },
  },
  mounted() {
    //lifecycle hooks
    const girisYapildiMi = this.$store.getters["auth/girisYapildiMi"];

    if (girisYapildiMi) {
      this.paylasimlariAl();
      const kullaniciAdi = this.$store.getters["auth/aktifKullaniciAl"];
      this.$socketio.emit("connection", (response) => {
        console.log("server cevap - ", response);
      });

      this.$socketio.on("girisYapanKullaniciCevap", (response) => {
        console.log(response);
      });

      this.$socketio.emit(
        "girisYapanKullanici",
        { kAdi: kullaniciAdi },
        (response) => {
          console.log(response);
        }
      );
    }
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

p {
  color: red;
}
</style>