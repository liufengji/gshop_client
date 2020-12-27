/*
通过mutation间接更新 state 的多个方法的对象
 */

import {
  RECEIVE_ADDRESS,
  RECEIVE_FOODTYPES,
  RECEIVE_SHOPS
} from './mutation_types'

import {
  reqAddress,
  reqFoodTypes,
  reqShops
} from '../api'

export default {
  //异步获取地址
  async getAddress({commit,state}){
    //发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    //提交一个mutation
    if(result.code === 0){
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  //异步获取食品分类列表
  async getFoodTypes({commit}){
    //发送异步ajax请求
    const result = await reqFoodTypes()
    //提交一个mutation
    if(result.code === 0){
      const foodTypes = result.data
      commit(RECEIVE_FOODTYPES,{foodTypes})
    }
  },
  //异步获取商家列表
  async getShops({commit,state}){
    //发送异步ajax请求
    const {longitude, latitude} = state
    const result = await reqShops(longitude, latitude)
    //提交一个mutation
    if(result.code === 0){
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  }
}
