<template>
    <div id="nav">
    <router-link to="/">Inicio</router-link>
    <router-link to="/brazil">Brazil</router-link>
    <router-link to="/panama">Panama</router-link>
    <router-link to="/hawaii">Hawaii</router-link>
    <router-link to="/jamaica">Jamaica</router-link>
    </div>
</template>

<style>
    #nav .navigation-active-link {
        color: purple;
        border-bottom: 2px solid purple;
    }
</style>