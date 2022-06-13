import {
  createApp
} from 'vue'
import App from '~/App.vue'
import router from '~/routes'
import store from '~/store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import firebaseConfig from '../firebaseConfig'

import {
  initializeApp
} from 'firebase/app'
import {
  getDatabase,
  ref,
  onValue
} from 'firebase/database'

const app = createApp(App)
app.config.globalProperties.$firebase = initializeApp(firebaseConfig)
app.use(router)
app.use(store)
app.use(Antd)
app.mount('#app')