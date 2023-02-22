import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css

const app = createApp(App);

app.use(PrimeVue);
app.component("primevue-button", Button);
app.component("primevue-inputtext", InputText);

app.mount('#app');
