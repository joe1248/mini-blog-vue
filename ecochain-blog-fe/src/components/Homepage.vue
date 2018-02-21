<template>
  <div class="container">
    <div class="left-side">
      <Articles />
    </div>
    <div class="right-side">
      <h3>Search</h3>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Articles from './Articles.vue'

@Component({
  props: {},
  components: {
    Articles
  }
})

export default class Homepage extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .left-side {
    position:absolute;
    width: 75%;
  }
  .right-side {
    position:absolute;
    left: 75%;
    width: 25%;
  }
</style>
