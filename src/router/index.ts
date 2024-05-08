import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/materials/materials.vue')
    },
    {
      path: '/:materialId',
      name: 'material',
      component: () => import('../pages/material/material.vue')
    },
    {
      path: '/create',
      name: 'material-create',
      component: () => import('../pages/create-material/create-material.vue')
    }
  ]
})

export default router
