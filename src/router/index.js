import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Torte from '../views/Torte.vue'
import Kolaci from '../views/Kolaci.vue'
import Mafini from '../views/Mafini.vue'
import Purchase from '../views/Purchase.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/torte',
    name: 'Torte',
    component: Torte
  },
  {
    path: '/kolaci',
    name: 'Kolaci',
    component: Kolaci
  },
  {
    path: '/mafini',
    name: 'Mafini',
    component: Mafini
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: Purchase
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
