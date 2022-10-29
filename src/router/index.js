import { createRouter, createWebHistory } from 'vue-router'
import {ChatSocket} from '../components/Chat.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/chat',
      name: 'chat',
      component: ChatSocket
    }
  ]
})

export default router
