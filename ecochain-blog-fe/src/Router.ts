import Vue from 'vue'
import Router from 'vue-router'
import Homepage from './components/Homepage.vue'
import Article from './components/Article.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
      meta: { title: 'Latest Articles'},
      props: { currentPage : 1 }
    },
    {
      path: '/list-of-articles/page-:currentPage',
      name: 'Articles',
      component: Homepage,
      meta: {title: 'Articles'},
      props: true,
    },
    {
      path: '/view-article/article-:id',
      name: 'ArticleView',
      component: Article,
      meta: {title: 'Read Articles'},
      props: true,
    }
  ]
})
