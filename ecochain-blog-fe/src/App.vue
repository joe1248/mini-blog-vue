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
  body { background: linear-gradient(to bottom, #eee, #e0f2f1);}
</style>
