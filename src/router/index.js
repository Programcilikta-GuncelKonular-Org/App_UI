import { createRouter, createWebHistory } from "vue-router";
import Listele from "@/views/v_Listeleme.vue";
import Login from "@/views/v_Login.vue";
import NotFound from "@/views/v_Bulunamiyor.vue";
// import AnaSayfa from "@/views/v_AnaSayfa.vue";
import store from "@/store";

const routes = [
  {
    path: "/listele",
    name: "Listele",
    component: Listele,
    meta: { girisGerekliMi: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { girisGerekliMi: false },
  },
  {
    path: "",
    name: "anaSayfa",
    component: Login,
    meta: { girisGerekliMi: false },
  },
  {
    path: "/:notFound(.*)",
    component: NotFound,
    meta: { girisGerekliMi: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.girisGerekliMi && !store.getters["auth/girisYapildiMi"]) {
    next("/login");
  } else if (!to.meta.girisGerekliMi && store.getters["auth/girisYapildiMi"]) {
    next("/listele");
  } else {
    next();
  }
});

export default router;
