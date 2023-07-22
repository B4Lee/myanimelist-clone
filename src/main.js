import './assets/main.css'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueMatomo from 'vue-matomo'
import { createPinia } from 'pinia'
import GlobalLoading from './components/GlobalLoading.vue'
import { useLoadingStore } from './store'

const app = createApp(App)
const pinia = createPinia()

app.component('global-loading', GlobalLoading)
app.component('EasyDataTable', Vue3EasyDataTable)

app.use(pinia)
app.use(router)
app.use(VueMatomo, {
  host: import.meta.env.VITE_MATOMO_HOST,
  siteId: import.meta.env.VITE_MATOMO_SITE_ID,
  router: router,
  trackerFileName: 'matomo',
  enableLinkTracking: true,
  requireConsent: false,
  trackInitialView: true,
  disableCookies: false,
  enableHeartBeatTimer: false,
  heartBeatTimerInterval: 15,
  debug: false,
  userId: undefined,
  cookieDomain: undefined,
  domains: undefined,
  preInitActions: []
})

const isLoading = useLoadingStore()
app.config.globalProperties.$isLoading = isLoading
app.mount('#app')