import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "./css/tailwindcss.css"

createApp(App).use(store).use(store).use(router).mount('#app')
