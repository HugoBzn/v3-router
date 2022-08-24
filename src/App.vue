<script>
  // Importando el componente de navegacion
  import TheNavigation from '@/components/TheNavigation.vue';
  export default {
    components: {
      TheNavigation
    }
  }
</script>

<template>
  <the-navigation></the-navigation>
  <div class="container">
      <router-view></router-view>
  </div>
</template>
