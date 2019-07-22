import Vue from 'vue'
import Router from 'vue-router'
import Movie from './views/movie/Movie.vue'
import Music from './views/music/Musics.vue'
import MusicDetail from './views/music/MusicsDetail.vue'
import MovieDetail from './views/movie/MovieDetail.vue'
import PhotoDetail from './views/photo/PhotoDetail.vue'
import Book from './views/book/Book.vue'
import Photo from './views/photo/Photo.vue'
import './assets/js/rem.js'
import './assets/css/reset.css'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'movie',
      component: Movie
    },
    {
      path: '/music',
      name: 'music',
      component:Music
    },
      {
          path: '/book',
          name: 'book',
          component:Book
      },
      {
          path: '/photo',
          name: 'photo',
          component:Photo
      },
      {
          path: '/musicdetail',
          name: 'musicdetail',
          component:MusicDetail
      },
      {
          path: '/moviedetail',
          name: 'moviedetail',
          component:MovieDetail
      },
      {
          path: '/photodetail',
          name: 'photodetail',
          component:PhotoDetail
      }
  ]
})
