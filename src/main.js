import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import * as ELIcons from '@element-plus/icons-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-plus/dist/index.css';

const app = createApp(App);

Object.keys(ELIcons).forEach((name) => {
  app.component(name, ELIcons[name]);
});

app.use(store).use(router).use(ElementPlus)
  .mount('#app');
