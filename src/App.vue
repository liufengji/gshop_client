<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>

  import {mapActions} from 'vuex'
  import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {
    name: 'App',
    mounted () {
      //this.$store.dispatch('getAddress')
      //this.$store.dispatch('getFoodTypes')
      //this.$store.dispatch('getShops')

      this.getAddress()
      this.getFoodTypes()
      this.getShops()
    },
    methods: {
      ...mapActions(['getAddress', 'getFoodTypes', 'getShops'])
    },
    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
