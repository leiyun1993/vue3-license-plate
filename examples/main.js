import { createApp } from 'vue'
import App from './App.vue'
import LicensePlate from '../packages'
// import LicensePlate from "vue3-license-plate"
// import "vue3-license-plate/lib/licensePlate.css"

createApp(App).use(LicensePlate).mount('#app')
