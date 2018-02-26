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
  html {
    height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
    background: linear-gradient(to bottom, #eee, #fff) no-repeat fixed;
  }
</style>
