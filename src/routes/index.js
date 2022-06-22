import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from './Home'
import Device from './Device'
import Device2 from './Device2'
import Device3 from './Device3'
import ForTest from './ForTest'

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
    },
    {
      path: '/Device2',
      component: Device2
    },
    {
      path: '/Device3',
      component: Device3
    },
    {
      path: '/admin',
      component: ForTest
    }
  ]
})