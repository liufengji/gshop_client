import  Vue from 'vue'
// import moment from 'moment'
// import {format} from 'date-fns'
import format from 'date-fns/format'

// todo 自定义过滤器
// todo npm install moment --save
// Vue.filter('date-format',(value,formatStr='YYYY-MM-DD HH:mm:ss') =>{
//   return moment(value).format(formatStr)
// })

// todo npm install date-fns --save
Vue.filter('date-format', function (value, formatStr) {
  return format(value, formatStr || 'YYYY-MM-DD HH:mm:ss')
})
