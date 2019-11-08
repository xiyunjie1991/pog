import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from '@/store/store'

import './plugins/element.js'
import 'amfe-flexible'

Vue.config.productionTip = false
Vue.prototype.$ELEMENT = { size: 'mini', zIndex: 3000 };
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
