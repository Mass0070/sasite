import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Ansøgning from '../views/Ansøgning.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ansøgning/:id',
    name: 'Ansøgning',
    component: Ansøgning
  }
]

const router = new VueRouter({
  routes
})

export default router
