<template>
  <div id="app">
  <!-- <transition name="fade">  -->
    <router-view></router-view>
  <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: 'app',
}

</script>

<style>
html{
  font-size: 16px;
  font-weight: bold;
}
body{
  /* background: url("./assets/bg/background.jpg") 50% 0 no-repeat; */
  /* background-attachment:fixed; */
  opacity: 0.8;
}
html,body,#app{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* background-color: black !important; */
}

::-webkit-scrollbar {
    width: 2px;
    height: 2px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,.1);
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s
    }
.fade-enter, .fade-leave-active {
  opacity: 0
}
  
a:link,a:active,a:visited{
  text-decoration:none !important;
} 



</style>
