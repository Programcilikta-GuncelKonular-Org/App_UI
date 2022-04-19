<template>
  <h1 v-for="(eleman, index) in elemanlar" :key="index">
      {{eleman.bilgiMetni}}
  </h1>
</template>

<script>
export default {
  props: ['elemanlar']
};
</script>

<style scoped>
</style>