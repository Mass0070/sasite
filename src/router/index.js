import Vue from 'vue'
import VueRouter from 'vue-router'

const Profile = import(/* webpackChunkName: "group-Profile" */ `../views/Profile.vue`)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: import(/* webpackChunkName: "group-Home" */ `../views/Home.vue`)
  },
  {
    path: '/auth',
    name: 'auth',
    component: import(/* webpackChunkName: "group-Auth" */ `../views/auth.vue`)
  },
  {
    path: '/ansøgning/:id',
    name: 'Ansøgning',
    component: import(/* webpackChunkName: "group-Ansøgning" */ `../views/Ansøgning.vue`)
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/logout',
    name: 'Logout',
    component: import(/* webpackChunkName: "group-Logout" */ `../views/Logout.vue`)
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