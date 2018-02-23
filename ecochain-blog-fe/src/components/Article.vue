<template>
  <article class="flow-text">

    <h4>
      {{ title }}
      <span class="right">{{ createdAt }}</span>
    </h4>

    <p v-if="isArticleTrimmed">{{ contentTrimmed }}...</p>
    <p v-else>{{ content }}</p>

    <router-link v-if="isArticleTrimmed"  :to="{name: 'ArticleView', params: { id, currentParentPage } }">
      Read More
    </router-link>
    <router-link v-else :to="{name: 'Articles', params: { currentPage: currentParentPage } }">
      Go Back
    </router-link>

  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import DummyData from './DummyData.js'

@Component({
  props: {
    id: {
      required: true,
      type: Number
    },
    isArticleTrimmed: {
      default: false,
      type: Boolean
    },
    currentParentPage: {
      default: 1,
      type: Number
    }
  },
  components: {}
})

export default class Article extends Vue {
  // props (used in computed or methods) have to be declared for typescript
  id: number;
  isArticleTrimmed: boolean;

  // data
  title: String;
  content: String;
  createdAt: String;

  // computed
  get contentTrimmed () {
    return this.content.substr(0, 250)
  }

  created () {
    if (this.id) {
      const articles = DummyData.articles()
      for (let i = 0; i < articles.length; i++) {
        if (this.id === articles[i].id) {
          this.title = articles[i].title
          this.content = articles[i].content
          this.createdAt = articles[i].createdAt
        }
      }
    }
  }
}
</script>
<style scoped>
  article {
    padding-bottom:30px;
  }
</style>
