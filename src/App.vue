<script setup>

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <br>
  <router-link to="/">Inicio</router-link> |
  <router-link to="/about">Acerca de...</router-link>
  <router-view></router-view>
</template>

<style>
  body {
    background-color: #121736;
  }
  #app {
    font-family: system-ui, -apple-system;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    margin-top: 60px;
  }
</style>
