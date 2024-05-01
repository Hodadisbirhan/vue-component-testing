import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShowView from '../views/base/show.vue'
import BaseView from '../views/base/index.vue'
import Base from '../views/base.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/base',
      name: 'base',
      component: Base,
      children: [
        { path: '', component: BaseView, name: 'baseChild' },
        {
          path: '/base/show',
          name: 'show',
          component: ShowView
        }
      ]
    }
  ]
})

export default router
