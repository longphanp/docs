import { createApp } from 'vue'
import App from './App.vue'
import AppNd from './AppNd.vue'
const app = createApp(App)

const secondApp = createApp(AppNd)

app.mount('#app')

secondApp.mount('#appnd')
