// main.js
import { createApp } from 'vue';
import App from './App.vue';
import i18n from '@/i18n/i18n';
import { registerPlugins } from '@/plugins';

const app = createApp(App);



// Register other plugins
registerPlugins(app);

// Mount the app with Vue I18n instance
app.use(i18n).mount('#app');
