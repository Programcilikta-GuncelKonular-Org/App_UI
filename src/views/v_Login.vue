<template>
  <cmpLogin @formuGonder="GirisYap" />
</template>

<script>
import cmpLogin from "@/components/Login.vue";

export default {
  components: {
    cmpLogin,
  },
  methods: {
    GirisYap(e) {
      this.$store.dispatch("auth/KullaniciGirisi", e).then((res) => {
        alert(res);
      });
    },
  },
};
</script>

<style>
</style>