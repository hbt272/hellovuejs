import Vue from 'vue'
import Router from 'vue-router'
import Loto from '@/components/Loto'
import checkNumber from '@/components/checkNumber'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Loto',
      component: Loto
    },
    {
      path: '/check',
      name: 'checkNumber',
      component: checkNumber
    }
  ]
})
