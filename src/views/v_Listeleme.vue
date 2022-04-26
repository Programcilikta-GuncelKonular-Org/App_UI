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
  methods: {
    async paylasimlariAl() {
      try {
        await this.$store.dispatch("bilgiler/BilgileriAl");
        this.elemanlarList = this.$store.state.bilgiler.storePaylasimlar;
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    //lifecycle hooks
    this.paylasimlariAl();
  },
};
</script>

<style>
</style>