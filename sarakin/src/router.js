import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import CrateAccount from './views/CreateAccount.vue'
import Deposit from './views/Depositar.vue'
import Payment from './views/Pagamento.vue'
import Transfer from './views/Transferir.vue'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/create',
      name: 'create_account',
      component: CrateAccount
    },
    {
      path:'/deposit',
      name: 'deposit',
      component: Deposit,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/pay',
      name: 'payment',
      component: Payment,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: Transfer,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('')
  else next()
})

export default router