import Vue from 'vue'
import router from './router.js';
import App from './App';
import axios from 'axios'
import md5 from 'js-md5';
Vue.prototype.axios = axios;
axios.defaults.withCredentials = true
Vue.config.productionTip = false
Vue.prototype.$md5 = md5;


new Vue
(
  {
    router,  // es6语法，相当于router:router,
    render: h => h(App),
    axios,
  }
).$mount('#app')
