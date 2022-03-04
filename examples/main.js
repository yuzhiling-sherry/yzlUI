import Vue from 'vue'
import App from './App.vue'

import '../components/css/index.scss';
import yzlUI from '../components/lib/index'
Vue.use(yzlUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
