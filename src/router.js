import Vue from 'vue'
import Router from 'vue-router'

import StoreHome from './views/StoreHome.vue';
import Quiz from './views/Quiz.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: StoreHome
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      webpackChunkName: "about"
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/SearchResults.vue')
    },
    {
      path: '/course/about',
      name: 'course.about',
      component: () => import('./views/QuizAbout.vue')
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: Quiz
    }
  ]
})
