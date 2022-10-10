import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 创建一个vue应用实例
createApp(App).use(store).use(router).mount('#app')
