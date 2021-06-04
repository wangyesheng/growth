import { createApp } from 'vue';
import ElementPlus from 'element-plus';

// css
import 'element-plus/lib/theme-chalk/index.css';
import './assets/css/main.scss'

import App from './App.vue';
import router from './router';
import store from './store';

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus, { size: 'small', zIndex: 3000 })
  .mount('#app');
