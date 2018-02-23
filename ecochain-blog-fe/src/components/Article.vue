<template>
  <article class="flow-text card">

    <div class="card-content">
      <h4 class="truncate">
        {{ title }}
        <span class="right smaller_font">{{ createdAt }}</span>
      </h4>
      <p v-if="isArticleTrimmed">{{ contentTrimmed }}...</p>
      <p v-else>{{ content }}</p>
    </div>

    <div class="card-action">
      <router-link v-if="isArticleTrimmed"
                   :to="{name: 'ArticleView', params: { id, currentParentPage } }"
                   class="blue-text">
        Read More
      </router-link>
      <router-link v-else
                   :to="{name: 'Articles', params: { currentPage: currentParentPage } }"
                   class="blue-text">
        Go Back
      </router-link>
    </div>

  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {ArticleInterface} from '../types/ArticleInterface'
import {getAllArticles} from './DummyData'

@Component({
  props: {
    id: {
      required: true,
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
  components: {}
})

export default class Article extends Vue {
  // props (used in computed or methods) have to be declared for typescript
  id: string;
  isArticleTrimmed: boolean;

  // data
  title: string;
  content: string;
  createdAt: string;

  // computed
  get contentTrimmed () {
    return this.content.substr(0, 200)
  }

  created () {
    if (this.id) {
      const articles: Array<ArticleInterface> = getAllArticles()
      for (let i = 0; i < articles.length; i++) {
        const article: ArticleInterface = articles[i]
        if (this.id === article.id) {
          this.title = article.title
          this.content = article.content
          this.createdAt = article.createdAt
        }
      }
    }
  }
}
</script>
<style scoped>
  .smaller_font {
    font-size: smaller;
  }
</style>
