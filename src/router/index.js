import { createRouter, createWebHistory } from 'vue-router'
import Listele from "@/views/v_Listeleme.vue";
import Login from "@/views/v_Login.vue";

const routes = [
  {
    path: '/listele',
    name: 'Listele',
    component: Listele
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
