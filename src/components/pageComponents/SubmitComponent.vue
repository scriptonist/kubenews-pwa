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
              <div class="kube-header">Submit your kube story</div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <input class="kube-inputs" placeholder="Title" v-model="title"/>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <input class="kube-inputs" placeholder="URL" v-model="url"/>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <input class="kube-inputs" placeholder="Name" v-model="name"/>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <input class="kube-inputs" placeholder="Email" v-model="email"/>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <center>
                <div v-on:click="submitStory" class="kube-input-btn">Submit</div>
              </center>
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
                <input type="email" v-model="userEmail" class="kube-subscribe-email" placeholder="Email Address"/>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <center>
                <div v-on:click="subscribe" class="kube-subscribe-button">
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
          <center><div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="kube-header">Submit your kube story</div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <input class="kube-inputs" placeholder="Title" v-model="title"/>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <input class="kube-inputs" placeholder="URL" v-model="url"/>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <input class="kube-inputs" placeholder="Name" v-model="name"/>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <input class="kube-inputs" placeholder="Email" v-model="email"/>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <center>
                <div class="kube-input-btn">Submit</div>
              </center>
            </div>
          </div></center>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="kube-official-card" style="margin-top: 5%;">
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
                <input type="email" v-model="userEmail" class="kube-subscribe-email" placeholder="Email Address"/>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <center>
                <div v-on:click="subscribe" class="kube-subscribe-button" style="margin-bottom:4%;">
                  Subscribe
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="snackbar">{{ mssg }}</div>
  </div>
</template>
<script>
import SubmitComponentMixin from '../mixins/SubmitComponentMixin.js'
import SubscribeMixin from '../mixins/SubscribeMixin.js'
export default {
  mixins: [SubmitComponentMixin, SubscribeMixin]
}
</script>
<style scoped src='../../assets/css/submit.css'>
</style>
