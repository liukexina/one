import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Connect from './views/Connect.vue'
import Begin from './components/Begin.vue'
import Connectcom1 from './components/Connectcom1.vue'
import Connectcom2 from './components/Connectcom2.vue'
import ErrorPage from './views/404.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
      {
          path: '/connect',
          name: 'connect',
          component: Connect,
          children:[{
              path:'begin',
              component:Begin
            },
            {
              path:'connectcom1',
              name:'test1',
              component:Connectcom1
            },
            {
                path:'connectcom2/:name/:age',
                name:'test2',
                component:Connectcom2
            },
            {
                path:'backtwo/:name/:age',
                redirect:'connectcom2/:name/:age'
            }
          ]
      },
      {
        path:'*',
        component:ErrorPage
      },
      {
          path:'/backhome',
          component:Home,
          alias:'/bh'
      },
      {
        path:'/home',
        redirect:'/'
      }
  ]
})
