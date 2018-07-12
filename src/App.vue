<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  overflow-x: hidden;
  width: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .1s;
}
.fade-enter-active {
  transition-delay: .1s;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
