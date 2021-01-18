/*
通过mutation间接更新 state 的多个方法的对象
 */

import {
  RECEIVE_ADDRESS,
  RECEIVE_FOODTYPES,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT
} from './mutation_types'

import {
  reqAddress,
  reqFoodTypes,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopGoods,
  reqShopRatings,
  reqShopInfo
} from '../api'

export default {
  //异步获取地址
  async getAddress ({commit, state}) {
    //发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    //提交一个mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  //异步获取食品分类列表
  async getFoodTypes ({commit}) {
    //发送异步ajax请求
    const result = await reqFoodTypes()
    //提交一个mutation
    if (result.code === 0) {
      const foodTypes = result.data
      commit(RECEIVE_FOODTYPES, {foodTypes})
    }
  },
  //异步获取商家列表
  async getShops ({commit, state}) {
    //发送异步ajax请求
    const {longitude, latitude} = state
    const result = await reqShops(longitude, latitude)
    //提交一个mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  //同步记录用户信息
  recordUser ({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  // todo 异步获取用户信息
  async getUserInfo ({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  },
  // todo 异步登出
  async logout ({commit}) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USER_INFO)
    }
  },
  // todo 异步获取商家信息
  async getShopInfo ({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
      info.score = 3.5
      commit(RECEIVE_INFO, {info})
    }
  },
  // todo 异步获取商家评价列表
  async getShopRatings ({commit}) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },
  // todo 异步获取商家商品列表
  async getShopGoods ({commit},callback) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      // todo 数据更新了,通知一下组件
      callback && callback()
    }
  },

  // todo 同步更新 food 中的 count 值
  updateFoodCount({commit},{isAdd,food}){
    if (isAdd){ //添加
      commit(INCREMENT_FOOD_COUNT,{food})
    }else{ //减少
      commit(DECREMENT_FOOD_COUNT,{food})
    }
  }
}
