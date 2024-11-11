import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '@/views/UserView.vue'
import UserPosts from '@/components/UserPosts.vue'
import UserProfile from '@/components/UserProfile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/user/:id',
      name: 'user',
      component: UserView,
      children : [
        {path: '', name:'user', component: UserProfile},
        {path: 'profile', name:'user-profile', component: UserProfile},
        {path: 'posts', name:'user-posts', component: UserPosts}
      ]
    }
  ],
})

export default router
