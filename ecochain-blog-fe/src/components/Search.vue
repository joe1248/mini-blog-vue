<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <form>
          <div class="input-field">
            <input v-model="searchQuery" id="search" type="search" class="grey lighten-5 blue-text"
                   v-on:keyup="searchInArticlesDebounced">
            <label for="search"><i class="material-icons">search</i></label>
            <i class="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>

    <div v-if="lastSearchQuery !== ''" class="search-results">
      <div v-if="results && results.length === 0" class="collection">
        <div class="collection-item">No results for "{{lastSearchQuery}}"</div>
      </div>
      <div v-else v-for="(article, index) in results" class="collection" :key="index">
        <router-link :to="{name: 'ArticleView', params: { id: article.id } }"
                     class="collection-item">
          {{article.title}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import * as _ from 'lodash'
import {ArticleInterface} from '../types/ArticleInterface'
import ApiService from '../ApiService'

@Component({
  props: {
  },
  components: {
  }
})

export default class Search extends Vue {
  // data
  error: string = ''
  previousSearchQuery: string = ''
  lastSearchQuery: string = ''
  searchQuery: string = ''
  results: Array<ArticleInterface> = []

  searchInArticlesDebounced = _.debounce(() => {
    this.searchInArticles()
  }, 500);

  searchInArticles () {
    if (this.searchQuery && this.searchQuery !== this.previousSearchQuery) {
      this.previousSearchQuery = this.searchQuery
      ApiService.searchArticles(
        this.searchQuery,
        (err: string, articles: Array<ArticleInterface>) => {
          if (err) {
            this.error = err
            return
          }
          this.results = articles
          Vue.nextTick(() => {
            this.lastSearchQuery = this.searchQuery
          })
        }
      )
    }
  }
}
</script>

<style scoped>
  nav {
    margin-top: 8px;
  }
  .search-results {
    padding: 40px 0 40px 0;
  }
  .collection {
    margin: -1px;
  }
</style>
