import Vue from 'vue'
import Router from 'vue-router'
import About from './views/about/About.vue'
import Contact from './views/contact/Contact.vue'
import Entires from './views/entires/Entires.vue'
import Work from './views/work/Work.vue'
import Home from './views/home/Home.vue'
Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
      {
          path:'/',
          name:'home',
          component:Home
      },
      {
          path:'/about',
          name:'about',
          component:About
      },
      {
          path:'/contact',
          name:'contact',
          component:Contact
      },
      {
          path:'/entires',
          name:'entires',
          component:Entires
      },
      {
          path:'/work',
          name:'work',
          component:Work
      }


  ]
})
