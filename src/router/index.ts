import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainLayoutVue from '@/layouts/MainLayout.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainLayoutVue,
    children: [
      {
        path: '/login',
        component: () => import('@/views/Login.vue')
      },
      {
        path: '/',
        component: ()=> import('@/views/Home.vue')
      },
      {
        path: '/sigUp',
        component: ()=> import('@/views/SigUp.vue')
      }


    ]
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
