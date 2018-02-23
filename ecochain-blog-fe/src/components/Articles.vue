<template>
  <div>
    <div v-for="(article, index)  in pagedArticles" :key="index">
      <Article v-bind:id="article.id" :isArticleTrimmed="true" :currentParentPage="currentPage"></Article>
    </div>
    <!-- Pagination offset="offset" limit="limit" @click="fetchStories(pagination.prev_page_url)"/-->
    <div class="pagination" >
      <router-link :to="{name: 'Articles', params: { currentPage: parseInt(currentPage) - 1 } }"
                   class="btn btn-default"
                   :disabled="parseInt(currentPage) <= 1">
        Previous
      </router-link>
      <span>Page {{currentPage}} of {{pagination.last_page}}</span>
      <router-link :to="{name: 'Articles', params: { currentPage: parseInt(currentPage) + 1} }"
                   class="btn btn-default"
                   :disabled="parseInt(currentPage) >= pagination.last_page">
        Next
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Article from './Article.vue'
import DummyData from './DummyData.js'

@Component({
  props: {
    currentPage: {
      default: 1,
      type: Number
    }
  },
  components: {
    Article
  }
})

export default class Articles extends Vue {
  currentPage: string;

  pagination = {
    current_page: this.currentPage,
    last_page: 3,
    next_page_url: 'next', // data.next_page_url,
    prev_page_url: 'prev' // data.prev_page_url
  };
  pagedArticles: Array<Object> = [];

  created () {
    const limit = 2
    const articles: Array<Object> = DummyData.articles()
    this.pagedArticles = articles.slice(
      (parseInt(this.currentPage) - 1) * limit,
      (parseInt(this.currentPage) - 1) * limit + limit
    )
  }
}
</script>

<style scoped>
  .pagination {
    padding-top: 20px;
    text-align: center;
  }
  .pagination span {
    margin: 20px;
  }
</style>
