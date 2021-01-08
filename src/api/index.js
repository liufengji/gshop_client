/*
包含n个接口请求函数的模块
函数的返回值:promise对象
 */

import ajax from './ajax'

//const BASE_URL = 'http://localhost:4000'
// TODO Ctrl + Shift + u -> 大小写切换
const BASE_URL = '/api'

// TODO 1、根据经纬度获取位置详情
//http://localhost:4000/position/:geohash
//暴露接口请求函数
// export function reqAddress(geohash){
//   ajax(`position/${geohash}`)
// }
//箭头函数(匿名函数)
//param参数
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)

// TODO 2、获取食品分类列表
export const reqFoodTypes = () => ajax(BASE_URL+'/index_category')

// TODO 3、根据经纬度获取商铺列表
//export const reqShops = (a, b) => ajax(BASE_URL+'/shops', {longitude:a, latitude:b})
export const reqShops = (longitude, latitude) => ajax(BASE_URL+'/shops', {longitude, latitude})

// TODO 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL+'/search_shops', {geohash, keyword})

// TODO 5、 获取一次性验证码
export const reqCaptcha = () => ajax(BASE_URL+'/captcha')

// TODO 6、用户名密码登陆
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL+'/login_pwd', {name, pwd, captcha}, 'POST')

// TODO 7、发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL+'/sendcode', {phone})

// TODO 8、手机号验证码登陆
export const reqSmsLogin = (phone, code) => ajax(BASE_URL+'/login_sms', {phone, code}, 'POST')

// TODO 9、根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE_URL+'/userinfo')

// TODO 10、用户登出
export const reqLogout = () => ajax(BASE_URL+'/logout')

// TODO 获取商家信息
export const reqShopInfo = () => ajax('/info')

// TODO 获取商家评价数组
export const reqShopRatings = () => ajax('/ratings')

// TODO 获取商家商品数组
export const reqShopGoods = () => ajax('/goods')
