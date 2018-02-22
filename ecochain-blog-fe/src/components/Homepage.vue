<template>
  <div class="flex-container">
    <div class="column_left">
      <Articles />
    </div>
    <div class="column_right">
      <!-- Move to SearchField Component -->
      <div class="input-field">
        <input id="search" type="search" class="blue">
        <label class="label-icon" for="search"><i class="material-icons">search</i></label>
        <i class="material-icons">close</i>
      </div>
      <div class="search-results red">
      </div>
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
    justify-content: space-around;
  }
</style>
