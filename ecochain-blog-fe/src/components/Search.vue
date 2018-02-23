<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <form>
          <div class="input-field">
            <input v-model="searchedQuery" id="search" type="search" class="grey lighten-5 blue-text"
                   v-on:keyup="searchInArticles">
            <label for="search"><i class="material-icons">search</i></label>
            <i class="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>

    <div class="search-results">
      <div v-for="(article, index) in results" class="collection" :key="index">
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
import {ArticleInterface} from '../types/ArticleInterface'
import {getAllArticles} from './DummyData'

@Component({
  props: {
  },
  components: {
  }
})

export default class Search extends Vue {
  searchedQuery: String;
  results: Array<ArticleInterface> = [];

  searchInArticles () {
    this.$nextTick(function () {
      this.results = getAllArticles()
    })
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
