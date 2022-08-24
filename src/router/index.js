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
    path: "/brazil",
    name: "Brazil",
    component: () => import("@/views/Brazil.vue"),
  },
  {
    path: "/hawaii",
    name: "Hawaii",
    component: () => import("@/views/Hawaii.vue"),
  },
  {
    path: "/panama",
    name: "Panama",
    component: () => import("@/views/Panama.vue"),
  },
  {
    path: "/jamaica",
    name: "Jamaica",
    component: () => import("@/views/Jamaica.vue"),
  },
  {
    path: "/destination/:id",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
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
