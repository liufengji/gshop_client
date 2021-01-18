<template>
  <div class="cartControl">
    <transition name="move">
      <div class="iconfont icon-reduce" v-if="food.count" @click="updateFoodCount(false)"></div>
    </transition>
    <div class="cart-count" v-if="food.count">{{food.count}}</div>
    <div class="iconfont icon-add-fill" @click="updateFoodCount(true)"></div>
  </div>
</template>

<script>
  export default {
    name: 'CartController',
    props: {
      food: Object
    },
    methods: {
      updateFoodCount (isAdd) {
        const {food} = this
        // 通知 action 更新
        this.$store.dispatch('updateFoodCount', {isAdd, food})
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cartControl
    font-size 0

    .cart-decrease
      display inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color rgb(0, 160, 220)

    .icon-reduce
      display inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color $green

      &.move-enter-active, &.move-leave-active
        transition all .3s

      &.move-enter, &.move-leave-to
        opacity 0
        transform translateX(15px) rotate(360deg)

    .cart-count
      display inline-block
      vertical-align top
      width 12px
      padding-top 6px
      line-height 24px
      text-align center
      font-size 10px
      color rgb(147, 153, 159)

    .icon-add-fill
      display inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color $green
</style>
