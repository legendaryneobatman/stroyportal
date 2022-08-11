import { createApp } from 'vue'
import App from './App.vue'
import vClickOutside from './directives/v-click-outside'

createApp(App).directive('click-outside', vClickOutside).mount('#app')
