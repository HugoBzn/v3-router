<script>
import sourceData from '@/data.json'
export default{
  data(){
    return {
      destinations: sourceData.destinations
    }
  }
}
</script>

<template>
    <div id="nav">
        <router-link id="logo" to="/">Travel App</router-link>
        <router-link v-for="destination in destinations"
        :key="destination.id"
        :to="{
        name: 'destination.show',
        params: {
            id: destination.id,
            slug: destination.slug
        }
        }">
            {{destination.name}}
        </router-link>
    </div>
</template>

<style>
    #nav .navigation-active-link {
        color: purple;
        border-bottom: 2px solid purple;
    }
</style>