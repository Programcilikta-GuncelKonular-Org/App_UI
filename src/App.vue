<template>
  <NavBar />
  <div class="container deneme">
    <div class="row">
      <div class="col-2"></div>

      <div class="col-6 customPadding">
        <router-view />
      </div>

      <div class="col-2 customPadding">
        <AktifKull v-if="kullaniciGisiYapildiMi" />
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    kullaniciGisiYapildiMi() {
      return this.$store.getters["auth/girisYapildiMi"];
    },
  },
};
</script>

<style lang="scss">
.deneme {
  max-width: 100% !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* // text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.viewCss {
  margin-top: 5%;
  margin-bottom: 5%;
}

.customPadding {
  padding-top: 2%;
  padding-bottom: 1%;
}

.onlineKullanici {
  border-radius: 20px;
  opacity: 0.75;
}
.onlineKullanici:hover {
  opacity: 1;
}
</style>
