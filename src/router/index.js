// 1. Importando los paquetes del VUE Router
import { createRouter, createWebHistory } from "vue-router";

// Importando componentes
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

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
];

// 2. Creando el VUE Router
const router = createRouter({
  // 2.1 Configurando el modo historia
  history: createWebHistory(),
  // 2.3 Configurando las rutas
  routes,
});

export default router;
