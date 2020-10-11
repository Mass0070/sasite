import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: "group-Home" */ `../views/Home.vue`)
const Auth = () => import(/* webpackChunkName: "group-Auth" */ `../views/auth.vue`)
const Ansøgning = () => import(/* webpackChunkName: "group-Ansøgning" */ `../views/Ansøgning.vue`)
const Profile = () => import(/* webpackChunkName: "group-Profile" */ `../views/Profile.vue`)
const Logout = () => import(/* webpackChunkName: "group-Logout" */ `../views/Logout.vue`)

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
    component: Auth
  },
  {
    path: '/ansøgning/:id',
    name: 'Ansøgning',
    component: Ansøgning
  },
  {
    path: '/profile/:id?',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/regler',
    redirect: 'https://docs.google.com/document/d/1ekdhxDC2iwOvJg_395BlG1UaZ2HiMjCTlyoHk8oTcI8/'
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