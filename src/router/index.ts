import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from "@/layouts/Layout.vue"
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    children: [
      {
        path: '/',
        component: ()=> import('@/views/Home.vue')

      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
