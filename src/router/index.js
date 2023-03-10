import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: home */ '../views/HomeView.vue')
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: () => import(/* webpackChunkName: Details */ '../views/Details.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
