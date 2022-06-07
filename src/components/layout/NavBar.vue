<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-secondary bg-gradient">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">B-P-P</a>
    </div>

    <button
      type="button"
      class="btn btn-outline-dark position-relative "
      v-if="kullaniciGisiYapildiMi"
      @click="CikisYap"
    > Çıkış
      <span
        class="
          position-absolute
          top-0
          start-100
          translate-middle
          badge
          rounded-pill
          bg-danger
        "
      >
        {{ aktifKullanici }}
      </span>
    </button>
  </nav>
</template>

<script>
export default {
  computed: {
    kullaniciGisiYapildiMi() {
      return this.$store.getters["auth/girisYapildiMi"];
    },
    aktifKullanici() {
      return this.$store.getters["auth/aktifKullaniciAl"];
    },
  },
  methods: {
    CikisYap() {
      localStorage.removeItem("kullanici");
      this.$router.go("/login");
    },
  },
};
</script>

<style scoped>
button {
  margin-right: 2.5rem;
  margin-top: 1rem;
}
</style>