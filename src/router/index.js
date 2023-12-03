// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('@/views/Products.vue'),
      },
      {
        path: 'contact-us',
        name: 'Contact',
        component: () => import('@/views/Contact.vue'),
      },
      {
        path: 'about-us',
        name: 'AboutUs',
        component: () => import('@/views/AboutUs.vue'),
      },
      {
        path: 'book',
        name: 'Book',
        component: () => import('@/views/Book.vue'),
      },
      {
        path: 'product',
        name: 'Product',
        component: () => import('@/views/Product.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
