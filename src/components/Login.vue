<template>
  <form class="card p-3" @submit.prevent="$emit('formuGonder', kullanici)">
    <div class="mb-3">
      <label for="txtKullaniciAdi" class="form-label">Kullanıcı Adı</label>
      <input
        type="text"
        class="form-control"
        id="txtKullaniciAdi"
        v-model="kullanici.kAdi"
        required
      />
    </div>
    <div class="mb-3">
      <label for="txtSifre" class="form-label">Şifre</label>
      <input
        type="password"
        class="form-control"
        id="txtSifre"
        v-model="kullanici.sifre"
        required
      />
    </div>
    <slot></slot>
    <div>
      <button type="submit" class="btn btn-primary">Giriş</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      kullanici: { kAdi: "", sifre: "" },
    };
  },
};
</script>

<style>
#CardView:hover {
  background-color: white;
}
</style>