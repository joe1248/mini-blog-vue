<template>
  <div id="app" class="container">
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script lang="ts">

export default {
  name: 'App'
}
</script>

<style>
  #app {
    margin-top: 50px;
  }
</style>
