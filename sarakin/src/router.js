import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import CrateAccount from './views/CreateAccount.vue'
import Deposit from './views/Depositar.vue'
import Payment from './views/Pagamento.vue'
import Transfer from './views/Transferir.vue'

Vue.use(Router)

export default new Router({
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
      component: Home
    },
    {
      path: '/create',
      name: 'create_account',
      component: CrateAccount
    },
    {
      path:'/deposit',
      name: 'deposit',
      component: Deposit
    },
    {
      path: '/pay',
      name: 'payment',
      component: Payment 
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: Transfer
    }
  ]
})
