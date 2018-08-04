import Vue from 'vue'
import Router from 'vue-router'
import Board from './views/Board.vue'
import Backlog from './views/Backlog.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/backlog',
      name: 'Backlog',
      component: Backlog
    },
    {
      path: '/board',
      name: 'Board',
      component: Board
    },
    {
      path: '*',
      redirect: '/backlog'
    }
  ]
})
