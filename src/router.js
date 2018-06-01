import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from './components/home/home.vue'
import PageComponent from './components/page/page.vue'
import AboutComponent from './components/about/about.vue'
import ContactUsComponent from './components/contact-us/contact-us.vue'
import SignInComponent from './components/signin/signin.vue'
import SignUpComponent from './components/signup/signup.vue'
import AccountConfirmedComponent from './components/account-confirmed/account-confirmed.vue'
import ResetPasswordComponent from './components/reset-password/reset-password.vue'
import ForgotPasswordComponent from './components/forgot-password/forgot-password.vue'
import CongratulationsComponent from './components/congratulations/congratulations.vue'
import TracksComponent from './components/tracks/tracks.vue'
import LessonComponent from './components/lesson/lesson.vue'
import ModulesComponent from './components/modules/modules.vue'
import WorkshopComponent from './components/workshop/workshop.vue'
import WorkshopsComponent from './components/workshops/workshops.vue'
import NotFoundComponent from './components/not-found/not-found.vue'
import ProfileSettings from './components/profile-settings/profile-settings.vue'
import editPersonalInfo from './components/profile-settings/edit-personal-info/edit-personal-info.vue'
import changePath from './components/profile-settings/change-path/change-path.vue'
import changePassword from './components/profile-settings/change-password/change-password.vue'

Vue.use(Router)

export default new Router({
   mode: 'history',
   routes: [{
      path: '/',
      name: 'home',
      component: HomeComponent
   }, {
      path: '/home',
      redirect: '/'
   }, {
      name: 'signin',
      path: '/signin',
      component: SignInComponent
   }, {
      name: 'signup',
      path: '/signup',
      component: SignUpComponent
   }, {
      name: 'account-confirmed',
      path: '/account-confirmed',
      component: AccountConfirmedComponent
   }, {
      name: 'congratulations',
      path: '/congratulations',
      component: CongratulationsComponent
   }, {
      name: 'reset-password',
      path: '/reset-password',
      component: ResetPasswordComponent
   }, {
      name: 'forgot-password',
      path: '/forgot-password',
      component: ForgotPasswordComponent
   }, {
      name: 'about',
      path: '/about',
      component: AboutComponent
   }, {
      name: 'contact-us',
      path: '/contact-us',
      component: ContactUsComponent
   }, {
      name: 'page',
      path: '/page/:page',
      component: PageComponent
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
    path: '/profile-settings/:user',
    component: ProfileSettings,
    children: [
      {path: '',
      redirect: {
         name: 'editPersonalInfo'
        }
    },
      {path: 'edit-personal-info', component: editPersonalInfo, name: 'editPersonalInfo'},
      {path: 'change-path', component: changePath, name: 'changePath'},
      {path: 'change-password', component: changePassword, name: 'changePassword'}
    ]
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
         name: 'lessons',
         path: ':lesson',
         component: LessonComponent
      }]
   }]
})
