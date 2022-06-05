import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from './Home'
import Device from './Device'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({
    top: 0
  }),
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/Device',
      component: Device
    }
  ]
})