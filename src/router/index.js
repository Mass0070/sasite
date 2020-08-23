import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Ansøgning from '../views/Ansøgning.vue'
import Profile from '../views/Profile.vue'
import auth from '../views/auth.vue'
import logout from '../views/Logout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    name: 'auth',
    component: auth
  },
  {
    path: '/ansøgning/:id',
    name: 'Ansøgning',
    component: Ansøgning
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/logout',
    name: 'Logout',
    component: logout
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router