<template>
  <div>
    <!-- Progress Bar -->
    <div v-if="width < 100" class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div id="myProgress">
          <div id="myBar"></div>
        </div>
      </div>
    </div>
    <!-- End -->
    <!-- Kubenews Body -->
    <div class="row">
      <!-- Kubenews Logo and Button -->
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <!-- Kubenews Logo -->
        <center><img class="kube-logo" src="../../assets/images/kubenews.png"/></center>
        <!-- End -->
      </div>
      <!-- End -->
    </div>
    <!-- End -->
  </div>
</template>
<script>
import IntroComponentMixin from '../mixins/IntroComponentMixin.js'
export default {
  mixins: [IntroComponentMixin]
}
</script>
<style scoped src='../../assets/css/intro.css'>
</style>
