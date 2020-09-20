import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Ansøgning from '../views/Ansøgning.vue'
import Profile from '../views/Profile.vue'
import auth from '../views/auth.vue'
import logout from '../views/Logout.vue'

Vue.use(VueRouter)

function lazyLoad(view){
  return() => import(`@/views/${view}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: lazyload(Home)
  },
  {
    path: '/auth',
    name: 'auth',
    component: lazyload(auth)
  },
  {
    path: '/ansøgning/:id',
    name: 'Ansøgning',
    component: lazyload(Ansøgning)
  },
  {
    path: '/profile',
    name: 'Profile',
    component: lazyload(Profile)
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: lazyload(Profile)
  },
  {
    path: '/logout',
    name: 'Logout',
    component: lazyload(logout)
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router