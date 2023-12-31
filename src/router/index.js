import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AnimeView from '../views/AnimeView.vue'
import CharacterView from '../views/CharacterView.vue'
import PeopleView from '../views/PeopleView.vue'
import TopAnime from '../views/TopAnime.vue'
import TopPeople from '../views/TopPeople.vue'
import TopCharacters from '../views/TopCharacters.vue'
import AnimeList from '../views/AnimeList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/anime/:id/',
      name: 'anime',
      component: AnimeView
    },
    {
      path: '/character/:id',
      name: 'character',
      component: CharacterView
    },
    {
      path: '/people/:id/',
      name: 'people',
      component: PeopleView
    },
    {
      path: '/anime/',
      name: 'top-anime',
      component: TopAnime
    },
    {
      path: '/character/',
      name: 'top-character',
      component: TopCharacters
    },
    {
      path: '/people/',
      name: 'top-people',
      component: TopPeople
    },
    {
      path: '/anime-list/',
      name: 'anime-list',
      component: AnimeList
    }
  ]
})

export default router
