// 1. Importando los paquetes del VUE Router
import { createRouter, createWebHistory } from "vue-router";

// Importando componentes
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Brazil from "@/views/Brazil.vue";
import Hawaii from "@/views/Hawaii.vue";
import Panama from "@/views/Panama.vue";
import Jamaica from "@/views/Jamaica.vue";

// Routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/brazil",
    name: "Brazil",
    component: Brazil,
  },
  {
    path: "/hawaii",
    name: "Hawaii",
    component: Hawaii,
  },
  {
    path: "/panama",
    name: "Panama",
    component: Panama,
  },
  {
    path: "/jamaica",
    name: "Jamaica",
    component: Jamaica,
  },
];

// 2. Creando el VUE Router
const router = createRouter({
  // 2.1 Configurando el modo historia
  history: createWebHistory(),
  // 2.3 Configurando las rutas
  routes,
});

export default router;
