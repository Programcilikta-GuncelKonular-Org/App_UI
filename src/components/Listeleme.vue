<template>
  <h1 v-for="eleman in elemanlar" :key="eleman">
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