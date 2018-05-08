import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from './components/home/home.vue'
import AboutComponent from './components/about/about.vue'
import SignInComponent from './components/signin/signin.vue'
import SignUpComponent from './components/signup/signup.vue'
import TracksComponent from './components/tracks/tracks.vue'
import LessonComponent from './components/lesson/lesson.vue'
import ModulesComponent from './components/modules/modules.vue'
import WorkshopComponent from './components/workshop/workshop.vue'
import NotFoundComponent from './components/not-found/not-found.vue'
import WorkshopsComponent from './components/workshops/workshops.vue'

Vue.use(Router)

export default new Router({
   mode: 'history',
   // mode: 'hash',
   routes: [{
      path: '/',
      name: 'home',
      component: HomeComponent
   }, {
      path: '/home',
      redirect: '/'
   }, , {
      name: 'signin',
      path: '/signin',
      component: SignInComponent
   }, {
      name: 'signup',
      path: '/signup',
      component: SignUpComponent
   }, {
      name: 'about',
      path: '/about',
      component: AboutComponent
   }, {
      name: '404',
      path: '/404',
      component: NotFoundComponent
   }, {
      path: '*',
      redirect: '/404'
   }, {
      name: 'tracks',
      path: '/tracks',
      component: TracksComponent
   }, {
      name: 'workshops',
      path: '/:track',
      component: WorkshopsComponent,
      children: [{
         name: 'workshop',
         path: ':workshop',
         component: WorkshopComponent
      }]
   }, {
      name: 'modules',
      component: ModulesComponent,
      path: '/:track/:workshop/:module',
      children: [{
         name: 'lesson',
         path: ':lesson',
         component: LessonComponent
      }]
   }]
})
