import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.css'
import storageSubscriber from './util/storageSubscriber'

storageSubscriber(store)
createApp(App).use(router).use(store).mount('#app')
