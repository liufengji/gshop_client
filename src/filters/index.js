import  Vue from 'vue'
import moment from 'moment'

// todo 自定义过滤器
// todo npm install moment --save
Vue.filter('date-format',(value,formatStr='YYYY-MM-DD HH:mm:ss') =>{
  return moment(value).format(formatStr)
})
