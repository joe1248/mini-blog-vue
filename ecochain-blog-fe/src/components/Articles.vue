<template>
  <div>
    <Loader v-if="loading"></Loader>
    <div v-else-if="!loading && pagedArticles && pagedArticles.length === 0" class="noArticlesYetDiv">
      <h3>No article were found in this blog</h3>
    </div>
    <div v-else>
      <div v-for="(article, index)  in pagedArticles" :key="index">
        <Article v-bind:id="article.id" :isArticleTrimmed="true" :currentParentPage="currentPage"></Article>
      </div>
      <!-- Pagination offset="offset" limit="limit" @click="fetchStories(pagination.prev_page_url)"/-->
      <div class="pagination" >
        <router-link :to="{name: 'Articles', params: { currentPage: (parseInt(currentPage) - 1).toString() } }"
                     class="btn btn-default"
                     :disabled="parseInt(currentPage) <= 1">
          Previous
        </router-link>
        <span>Page {{currentPage}} of {{numberOfPages}}</span>
        <router-link :to="{name: 'Articles', params: { currentPage: (parseInt(currentPage) + 1).toString() } }"
                     class="btn btn-default"
                     :disabled="parseInt(currentPage) >= numberOfPages">
          Next
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Loader from './Loader.vue'
import Article from './Article.vue'
import {ArticlesInterface} from '../types/ArticlesInterface'
import {ArticleInterface} from '../types/ArticleInterface'
import ApiService from '../ApiService'
import AppConfig from '../AppConfig'

@Component({
  props: {
    currentPage: {
      default: '1',
      type: String
    }
  },
  components: {
    Article,
    Loader
  }
})

export default class Articles extends Vue {
  currentPage: string

  // data
  loading: boolean = false
  error: string = ''
  pagedArticles: Array<ArticleInterface>
  prevPageUrl: string = ''
  nextPageUrl: string = ''
  numberOfPages: number = 1

  created () {
    this.fetchData()
  }

  fetchData () {
    const limit = AppConfig.numberOfArticlesPerPage.toString()
    this.loading = true
    ApiService.getArticles(
      this.currentPage,
      limit,
      (err: string, data: ArticlesInterface) => {
        this.loading = false
        if (err) {
          this.error = err
          return
        }
        this.pagedArticles = data.articles
        this.prevPageUrl = data.prev
        this.nextPageUrl = data.next
        this.numberOfPages = data.numberOfPages
      }
    )
  }
}
</script>

<style scoped>
  .noArticlesYetDiv {
    margin: 50px;
  }
  .pagination {
    padding-top: 20px;
    text-align: center;
  }
  .pagination span {
    margin: 20px;
  }
</style>
