import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入全局样式 02
import './assets/css/base.css' //自我执行

//引入全局js 02
import './assets/js/font' //自我执行

//引入路由的配置
import router from './plugins/router'


//引入axios插件对象
import axios from './plugins/axios';

//配置前端baseUrl
Vue.prototype.baseUrl = require('../config/config').active

import 'animate.css'

//引入全局过滤器
// import './filters/index.js'
// import './filters/index'
// import './filters'

//引入状态管理配置
import store from './plugins/store'

new Vue({
  // data:{
  //   bNav:false,
  //   bFoot:false,
  // },
  render: h => h(App),
  router,store
}).$mount('#app')
