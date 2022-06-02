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
      this.$store
        .dispatch("auth/KullaniciGirisi", e)
        .then(() => {
          const redirectUrl = "/" + (this.$route.query.redirect || "listele");
          this.$router.push(redirectUrl);
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style>
</style>