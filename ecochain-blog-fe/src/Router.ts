import Vue from 'vue'
import Router from 'vue-router'
import Homepage from './components/Homepage.vue'
import Article from './components/Articles.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
      meta: {title: 'Latest Articles'},
      props: false,
    },
    {
      path: '/',
      name: 'ArticleView',
      component: Article,
      meta: {title: 'Read Articles'},
      props: true,
    }
  ]
})
