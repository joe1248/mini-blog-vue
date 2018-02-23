<template>
  <div class="flex-container">
    <div class="column_left">
      <Articles :current-page="currentPage"/>
    </div>
    <div class="column_right">
      <Search />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Articles from './Articles.vue'
import Search from './Search.vue'

@Component({
  props: {
    currentPage: String
  },
  components: {
    Articles,
    Search
  }
})

export default class Homepage extends Vue {
}
</script>

<style scoped>
  .column_left {
    width: 75%;
  }
  .column_right {
    padding-left: 40px;
    width: 25%;
    min-width: 250px;
  }
  .flex-container {
    display: flex;
    flex-wrap: wrap-reverse;
  }
</style>
