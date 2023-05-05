import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import VueTypedJs from 'vue-typed-js';

import './style/base.css';

const app = createApp(App);

app.use(router);
app.use(VueTypedJs);
// app.component('font-awesome-icon', FontAwesomeIcon);

// 导入fontawesome script元素
const fontawesomeScript = document.createElement('script');
fontawesomeScript.src = 'https://kit.fontawesome.com/37db691c5b.js';
fontawesomeScript.crossOrigin = 'anonymous';
document.head.appendChild(fontawesomeScript);

app.mount('#app');
