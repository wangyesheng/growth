import { createApp } from 'vue';
import ElementPlus from 'element-plus';

// css
import 'element-plus/lib/theme-chalk/index.css';
import './assets/css/main.scss';

import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);
app.config.globalProperties = {
  version: 'v3.0.0',
};
app
  .use(store)
  .use(router)
  .use(ElementPlus, { size: 'small', zIndex: 3000 })
  .mount('#app');
