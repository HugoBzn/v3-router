import { createApp } from "vue";
// 1. Importando los paquetes del VUE Router
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
// Importando componentes
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
// 2. Creando el VUE Router
const router = createRouter({
  // 2.1 Configurando el modo historia
  history: createWebHistory(),
  // 2.3 Configurando las rutas
  routes: [
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
  ],
});
// 3. Registrando el VUE Router
createApp(App).use(router).mount("#app");
