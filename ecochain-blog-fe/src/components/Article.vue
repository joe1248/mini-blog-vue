<template>
  <article class="flow-text card">
    <Loader v-if="loading"></Loader>
    <div v-else>
      <div class="card-content">
        <h4>
          {{ title }}
          <span class="right smaller_font">{{ createdAt }}</span>
        </h4>
        <p v-if="isArticleTrimmed">{{ contentTrimmed }}...</p>
        <p v-else>{{ content }}</p>
      </div>
      <div class="card-action">
        <router-link v-if="isArticleTrimmed"
                     :to="{name: 'ArticleView', params: { id, title, content, createdAt, currentParentPage } }"
                     class="blue-text card-action-fix">
          Read more &gt;&gt;
        </router-link>
        <router-link v-else
                     :to="{name: 'Articles', params: { currentPage: currentParentPage } }"
                     class="blue-text card-action-fix">
          Go back
        </router-link>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Loader from './Loader.vue'
import {ArticleInterface} from '../types/ArticleInterface'
import ApiService from '../ApiService'

@Component({
  props: {
    id: {
      required: true,
      type: String
    },
    title: {
      default: '',
      type: String
    },
    content: {
      default: '',
      type: String
    },
    createdAt: {
      default: '',
      type: String
    },
    isArticleTrimmed: {
      default: false,
      type: Boolean
    },
    currentParentPage: {
      default: '1',
      type: String
    }
  },
  components: {
    Loader
  }
})

export default class Article extends Vue {
  // props (used in computed or methods) have to be declared for typescript
  id: string
  title: string
  content: string
  createdAt: string
  isArticleTrimmed: boolean

  // data
  loading: boolean = false
  error: string = ''

  // computed
  get contentTrimmed () {
    return this.content.substr(0, 200)
  }

  created () {
    if (this.id && !this.title) {
      this.fetchData()
    }
  }

  fetchData () {
    this.loading = true
    ApiService.getOneArticle(
      this.id,
      (err: string, article: ArticleInterface) => {
        this.loading = false
        if (err) {
          this.error = err
          return
        }
        this.title = article.title
        this.content = article.content || ''
        this.createdAt = article.createdAt || ''
      }
    )
  }
}
</script>
<style scoped>
  .smaller_font {
    font-size: smaller;
  }
  .card-action-fix {
    text-transform: none !important;
  }
</style>
