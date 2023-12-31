import { createApp } from 'vue';

import App from '../src/App.vue'
import BaseCard from '../src/components/Ui/BaseCard.vue'
import BaseButton from './components/Ui/BaseButton.vue'

const app = createApp(App)

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount('#app');
