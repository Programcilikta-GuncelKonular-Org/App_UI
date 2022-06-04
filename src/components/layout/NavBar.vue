<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-secondary bg-gradient">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">B-P-P</a>
    </div>
    <button type="button" class="btn btn-success" v-if="kullaniciGisiYapildiMi" @click="CikisYap">
      Çıkış
    </button>
  </nav>
</template>

<script>
export default {
  computed: {
    kullaniciGisiYapildiMi() {
      return this.$store.getters["auth/girisYapildiMi"];
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
  margin-right: 15px;
}
</style>