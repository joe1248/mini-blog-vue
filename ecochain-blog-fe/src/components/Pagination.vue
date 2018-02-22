<template>
  <div class="pagination">
    <button class="btn btn-default" @click="currentPage--"
            :disabled="currentPage <= 1">
      Previous
    </button>
    <span>Page {{currentPage}} of {{lastPage}}</span>
    <button class="btn btn-default" @click="currentPage++"
            :disabled="currentPage >= lastPage">Next
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    currentPage: Number,
    lastPage: Number
  },
  components: {
  }
})

export default class Pagination extends Vue {
}
</script>

<style scoped>
  .pagination {
    padding-top: 50px;
  }
</style>
