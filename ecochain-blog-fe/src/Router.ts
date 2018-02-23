import Vue from 'vue'
import Router from 'vue-router'
import Homepage from './components/Homepage.vue'
import Article from './components/Article.vue'

Vue.use(Router)

const router = new Router({
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

router.beforeEach(function (to, from, next) {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
  next();
});

export default router;
