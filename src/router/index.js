import Vue from 'vue'
import Router from 'vue-router'
import Loto from '@/components/Loto'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Loto',
      component: Loto
    }
  ]
})
