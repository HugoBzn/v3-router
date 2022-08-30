// 1. Importando los paquetes del VUE Router
import { createRouter, createWebHistory } from "vue-router";

// Importando componentes
import Home from "@/views/Home.vue";

// Routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
    props: true,
  },
];

// 2. Creando el VUE Router
const router = createRouter({
  // 2.1 Configurando el modo historia
  history: createWebHistory(),
  // 2.3 Configurando las rutas
  routes,
  // 2.4 Configurando clase del enlace activo
  linkActiveClass: "navigation-active-link",
});

export default router;
