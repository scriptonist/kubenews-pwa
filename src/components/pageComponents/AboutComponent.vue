<template>
  <div>
    <div id="screen-large" class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <ul class="kube-top-nav">
            <li class="kube-top-nav-left-item-image" v-on:click="goNext('/')">
              <a>
                <img class="kube-logo" src="../../assets/images/kubenews.png">
              </a>
            </li>
            <li class="kube-top-nav-right-item">
              <a v-on:click="goNext('about')">About</a>
            </li>
            <li class="kube-top-nav-right-item">
              <a v-on:click="goNext('archive')">Archive</a>
            </li>
            <li class="kube-top-nav-right-item">
              <a v-on:click="goNext('submit')">Submit</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="screen-small" class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <ul class="kube-top-nav">
            <li class="kube-top-nav-left-item-image" v-on:click="goNext('/')">
              <a>
                <img class="kube-logo" src="../../assets/images/kubenews.png">
              </a>
            </li>
            <li class="kube-top-nav-left-item">
              <a v-on:click="goNext('about')">About</a>
            </li>
            <li class="kube-top-nav-left-item">
              <a v-on:click="goNext('archive')">Archive</a>
            </li>
            <li class="kube-top-nav-left-item">
              <a v-on:click="goNext('submit')">Submit</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <hr class="kube-line">
      </div>
    </div>
    <div id="screen-large-devices" class="container" style="margin-top:2%;">
      <div class="row">
        <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="kube-header">About</div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="kube-text">
                This project aims to highlight some of the best articles,
                github projects and tutorials around the kubernetes
                community. We also aim to help you ehance your
                knowledge in this space by providing you with some of
                the best information you need to grow, learn and use the
                latest kubernetes technologies.
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="kube-header-team">Team</div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="kube-normal-team">Aravind K P</div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="kube-normal-team">Ajo John</div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="kube-normal-team">Arun Varghese</div>
            </div>
          </div>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div class="kube-official-card">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="kube-official-card-header">kubenews</div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="kube-official-card-text">
                  Are you a kubernetes dev ? Then
                  you're at the right place. We are
                  here to provide you with the latest
                  news and updates that's happening
                  in the kubernetes space.
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="kube-official-card-emails">Get weekly emails</div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="kube-subscribe">
                <input type="email" class="kube-subscribe-email" placeholder="Email Address"/>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <center>
                <div class="kube-subscribe-button">
                  Subscribe
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="screen-medium-devices" class="container" style="margin-top:2%;">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="kube-header">About</div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="kube-text">
                This project aims to highlight some of the best articles,
                github projects and tutorials around the kubernetes
                community. We also aim to help you ehance your
                knowledge in this space by providing you with some of
                the best information you need to grow, learn and use the
                latest kubernetes technologies.
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="kube-header-team">Team</div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <a class="kube-normal-team">Aravind K P</a>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <a class="kube-normal-team">Ajo John</a>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <a class="kube-normal-team">Arun Varghese</a>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div style="margin-top:3%;" class="kube-official-card">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="kube-official-card-header">kubenews</div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="kube-official-card-text">
                  Are you a kubernetes dev ? Then
                  you're at the right place. We are
                  here to provide you with the latest
                  news and updates that's happening
                  in the kubernetes space.
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="kube-official-card-emails">Get weekly emails</div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="kube-subscribe">
                <input type="email" class="kube-subscribe-email" placeholder="Email Address"/>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <center>
                <div  style="margin-bottom:3%;" class="kube-subscribe-button">
                  Subscribe
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NewsComponentMixin from '../mixins/NewsComponentMixin.js'
export default {
  mixins: [NewsComponentMixin]
}
</script>
<style scoped src='../../assets/css/about.css'>
</style>
