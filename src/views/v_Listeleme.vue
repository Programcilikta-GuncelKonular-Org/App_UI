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
  mounted() {
    fetch("http://localhost:3002/api/bilgiler").then((response) => {
      response.json().then((res) => {
        console.log(res.resData);
        this.elemanlarList = res.resData;//burada sıkıntı var
      });
    });
  },
};
</script>

<style>
</style>