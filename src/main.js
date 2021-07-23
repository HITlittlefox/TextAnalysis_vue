import Vue from 'vue'
import router from './router.js';
import App from './App';
import axios from 'axios'
Vue.prototype.axios = axios;

Vue.config.productionTip = false


new Vue
(
  {
    router,  // es6语法，相当于router:router,
    render: h => h(App),
    axios,
  }
).$mount('#app')
