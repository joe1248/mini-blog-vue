<template>
  <div class="article">
    <h2>
      {{ title }}
      <span>{{ createdAt }}</span>
    </h2>
    <p v-if="isArticleTrimmed" >{{ contentTrimmed }}</p>
    <a v-if="isArticleTrimmed" @click="isArticleTrimmed=false">Read more</a>

    <p v-else>{{ content }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    title: String,
    content: {
      default: 'Article coming soon...',
      type: String
    },
    createdAt: String
  },
  components: {}
})

export default class Article extends Vue {
  // props (used in computed or methods) have to be declared for typescript
  content: string;

  // data
  isArticleTrimmed: boolean = true;

  // computed
  get contentTrimmed () {
    return this.content.substr(0, 350)
  }
}
</script>
<style scoped>
  h2 {
    text-align: left;

  }
  h2 span {
    float: right;
  }
  p {
    text-align: left;
  }
</style>
