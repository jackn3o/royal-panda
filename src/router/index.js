import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import YellowTimeline from '@/components/YellowTimeline'
import FullPage from '@/components/FullPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: []
    },
    {
      path: '/YellowTimeline',
      name: 'YellowTimeline',
      component: YellowTimeline
    },
    {
      path: '/fullpage/:id',
      name: 'FullPage',
      component: FullPage
    }
  ]
})
