import store from "@/store";

export default function headerUret() {
  if (store.getters["auth/girisYapildiMi"]) {
    return {
      Authorization: `Bearer ${store.getters["auth/girisYapildiMi"].access} ${store.getters["auth/girisYapildiMi"].refresh}`,
    };
  }
}
