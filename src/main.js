
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'

// todo 加载 mockServer即可
import './mock/mockServer'

// todo 注册全局组件标签
Vue.component(Button.name,Button) // <mt-button>

Vue.config.productionTip = false

// Vue 项目一定要记住一句话,界面的展现,是根据数据来展现的
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router, //使用上vue-router
  store //使用上vuex
})
