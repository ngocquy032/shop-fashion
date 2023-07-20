import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainLayoutVue from '@/layouts/MainLayout.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: MainLayoutVue,
    children: [
  
    ]
  },
  {
    path: '/login',
    component: ()=>import('@/layouts/LoginLayout.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
