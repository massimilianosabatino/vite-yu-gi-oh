import { createApp } from 'vue'
import './main.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
//Import font installed
import "@fontsource/montserrat"; // Defaults to weight 400.

import App from './App.vue'

createApp(App).mount('#app')
