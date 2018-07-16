import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/pageComponents/IntroComponent'
import News from '@/components/pageComponents/NewsComponent'
import Archive from '@/components/pageComponents/ArchiveComponent'
import Submit from '@/components/pageComponents/SubmitComponent'
import About from '@/components/pageComponents/AboutComponent'
import ArchiveIssue from '@/components/pageComponents/ArchiveIssueComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/intro',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/',
      name: 'News',
      component: News
    },
    {
      path: '/archive',
      name: 'Archive',
      component: Archive
    },
    {
      path: '/submit',
      name: 'Submit',
      component: Submit
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/issue',
      name: 'ArchiveIssue',
      component: ArchiveIssue
    }
  ]
})
