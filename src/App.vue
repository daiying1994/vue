<template>
  <div id="app">
    <Header></Header>
    <transition
      enter-active-class="animated bounceInRight"
      leave-active-class="animated bounceOutLeft"
    >

      <router-view></router-view>
    </transition>
    <Footer></Footer>
    
  </div>
</template>

<script>

import Footer from './components/Footer'
import Header from './components/Header'

export default {
  
  name: 'app',
  components:{
    Footer,Header
  },
  // watch:{
  //   $route:{
  //     handler(to){
  //       let path=to.path
  //       if(/home|follow|column/.test(path)){
  //         this.$root.$data.bNav=true;
  //         this.$root.$data.bFoot=true;
  //       }
  //       if(/detail|login|reg/.test(path)){
  //         this.$root.$data.bNav=false;
  //         this.$root.$data.bFoot=false;
  //       }
  //       if(/user/.test(path)){
  //         this.$root.$data.bNav=false;
  //         this.$root.$data.bFoot=true;
  //       }
  //     },
  //     immediate:true
  //   }
  // }
  
}
</script>

<style>

</style>
