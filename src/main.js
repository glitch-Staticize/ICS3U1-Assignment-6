import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from "./router/index"

createApp(App).use(router).mount('#app')

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)