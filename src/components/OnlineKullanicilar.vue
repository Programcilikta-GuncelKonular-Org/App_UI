<template>
  <div class="container bg-light onlineKullanici pb-3">
    <h5 class="text-center pt-3">
      <b>Online Kullanıcılar</b>
    </h5>
    <ul class="list-group">
      <div class="container"></div>
      <li
        class="list-group-item"
        v-for="kullanici in onlineKullanicilar"
        :key="kullanici.sId"
      >
        <i class="bi bi-router-fill"></i> {{ kullanici.kAdi }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["onlineKullanicilar"],
};
</script>

<style>
</style>