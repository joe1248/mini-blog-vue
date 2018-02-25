<script lang="ts">
export default {
  name: 'Loader',
  created () {
  }
}
</script>

<template>
  <div class="preloader-wrapper big active centered">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
      <div class="circle"></div>
    </div><div class="circle-clipper right">
      <div class="circle"></div>
    </div>
    </div>
  </div>
</template>

<style>
  .centered {
    position: absolute;
    top: 45%;
    left: 45%;
  }
</style>
