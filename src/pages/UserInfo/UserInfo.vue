<template>
  <div class="uInfo">
    <div class="line" style="background-color:#E4E6E6">
      <div class="hLeft" @click="$router.back()"><</div>
      <div class="hRight">个人信息</div>
    </div>
    <div class="line">
      <div class="left">昵称</div>
      <div class="right">Alex MK</div>
    </div>
    <div class="line">
      <div class="left">拍一拍</div>
      <div class="right">被踢出太阳系</div>
    </div>
    <div class="line">
      <div class="left">微信号</div>
      <div class="right">324051100</div>
    </div>
    <div class="line">
      <div class="left">手机号</div>
      <div class="right">15621084993</div>
    </div>
    <div class="wb"></div>
  </div>
</template>

<script>
  export default {
    name: 'UserInfo'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .uInfo
    overflow hidden

    .line
      width 100%
      height 50px
      background-color #ffffff

      .hLeft
        width 20%
        height 50px
        text-align center;
        line-height 47px;
        position absolute
        top 0px

      .hRight
        height 100%
        width 100%
        text-align center;
        line-height 47px;

      .left
        width 80px
        height 100%
        float left
        text-align center;
        line-height 47px;

      .right
        height 100%
        float right
        text-align center;
        line-height 47px;
        margin-right 10px
    .wb
      width 100%
      height 500px
      background-color #E4E6E6
</style>
