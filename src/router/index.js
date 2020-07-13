import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Ansøgning from '../views/Ansøgning.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/ansøgning/:id',
    name: 'Ansøgning',
    component: Ansøgning
  },
  {
    path: '/profile/:id',
    name: 'profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes
})

export default router
