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
    props: route => ({ ...route.params, id: parseInt(route.params.id) }),
    children: [
      {
        path: ":experienceSlug",
        name: "experience.show",
        component: () => import("@/views/ExperienceShow.vue"),
        props: route => ({ ...route.params, id: parseInt(route.params.id) })
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: "NotFound",
    component: () => import("@/views/NotFound.vue")
  }
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
