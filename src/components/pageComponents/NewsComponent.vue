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
            <div class="col-xs-11 col-sm-11 col-md-11 col-lg-11">
              <div class="kube-issue-date">{{date}}</div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="kube-issue-editorial" style="font-weight: 400;">
                {{newsData.title}}
              </div>
            </div>
          </div>
          <div v-if="newsData.description" class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="kube-issue-editorial">
                {{newsData.description}}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <hr>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="kube-issue-stories">
                Stories
              </div>
            </div>
          </div>
          <div class="row" v-for="story in newsData.stories">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <a v-bind:href="story.url" class="kube-issue-story-header">
                {{story.title}}
              </a>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="kube-issue-story-author">
                {{story.author}}
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="kube-issue-story-abstract">
                {{story.description}}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <hr>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <div class="kube-issue-stories">
                GitHub
              </div>
            </div>
          </div>
          <div class="row" v-for="github in newsData.githublinks">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <a v-bind:href="github.url" class="kube-issue-story-header">
                {{github.name}}
              </a>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="kube-issue-story-abstract">
                {{github.description}}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <hr>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div v-on:click="goNext('archive')" class="kube-issue-story-footer">
                Archive
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div class="kube-official-card">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="kube-official-card-header">kubedaily</div>
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
          <div class="row">
            <div class="col-xs-11 col-sm-11 col-md-11 col-lg-11">
              <div class="kube-issue-date">{{date}}</div>
            </div>
          </div>
          <div v-if="newsData.description" class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="kube-issue-editorial">
                {{newsData.title}}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <hr>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="kube-issue-stories">
                Stories
              </div>
            </div>
          </div>
          <div class="row" v-for="story in newsData.stories">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <a v-bind:href="story.url" target="_blank" class="kube-issue-story-header">
                {{story.title}}
              </a>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="kube-issue-story-author">
                {{story.author}}
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="kube-issue-story-abstract">
                {{story.description}}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <hr>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <div class="kube-issue-stories">
                GitHub
              </div>
            </div>
          </div>
          <div class="row" v-for="github in newsData.githublinks">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <a v-bind:href="github.url" target="_blank" class="kube-issue-story-header">
                {{github.name}}
              </a>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="kube-issue-story-abstract">
                {{github.description}}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <hr>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div v-on:click="goNext('archive')" class="kube-issue-story-footer">
                Archive
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="kube-official-card">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="kube-official-card-header">kubedaily</div>
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
                <div v-on:click="subscribe" class="kube-subscribe-button" style="margin-bottom: 4%;">
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
import NewsComponentMixin from '../mixins/NewsComponentMixin.js'
import SubscribeMixin from '../mixins/SubscribeMixin.js'
export default {
  mixins: [NewsComponentMixin, SubscribeMixin]
}
</script>
<style scoped src='../../assets/css/news.css'>
</style>
