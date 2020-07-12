import Vue from 'vue'
import VueRouter from 'vue-router'
import PostList from '../components/PostList'
import Article from '../components/Article'

Vue.use(VueRouter)
const routes = [
  {
    name: 'root',
    path: '/',
    components: {
      main: PostList
    }
  },
  {
    name: 'post_content',
    path: '/topic/:id',
    components: {
      main: Article
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
