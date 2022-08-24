import { createApp } from "vue";

// 1. Importando los paquetes del VUE router
import router from "@/router";
import App from "./App.vue";

// 3. Registrando el VUE Router
createApp(App).use(router).mount("#app");
