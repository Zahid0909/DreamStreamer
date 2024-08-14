import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminDashboard from '../views/admin/AdminDashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: ':id',
          name: 'viewAlbums',
          component: () => import('../views/album/View.vue')
        }
      ]
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/artists',
      name: 'artists',
      component: () => import('../views/artists/Index.vue'),
      children: [
        {
          path: ':id',
          name: 'viewArtists',
          component: () => import('../views/artists/View.vue')
        },
      ]
    },
    {
      path: '/genres',
      name: 'genres',
      component: () => import('../views/genres/Index.vue'),
      children: [
        {
          path: ':id',
          name: 'viewGenres',
          component: () => import('../views/genres/View.vue')
        },
      ]
    },
    {
      path: '/tracks',
      name: 'tracks',
      component: () => import('../views/tracks/Index.vue'),
      children: [
        {
          path: ':id',
          name: 'viewTracks',
          component: () => import('../views/tracks/View.vue')
        },
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminDashboard
      // component: () => import('../views/admin/AdminDashboard.vue')
    },
    {
      path: '/admin/users',
      name: 'users',
      component: () => import('../views/admin/users/Index.vue'),
      children: [
        {
          path: 'create',
          name: 'createUser',
          component: () => import('../views/admin/users/Create.vue')
        },
        {
          path: ':id',
          name: 'viewUser',
          component: () => import('../views/admin/users/View.vue')
        },
        {
          path: ':id/edit',
          name: 'editUser',
          component: () => import('../views/admin/users/Edit.vue')
        }
      ]
    },
    {
      path: '/admin/artist',
      name: 'artist',
      component: () => import('../views/admin/artist/Index.vue'),
      children: [
        {
          path: 'create',
          name: 'createArtist',
          component: () => import('../views/admin/artist/Create.vue')
        },
        {
          path: ':id',
          name: 'viewArtist',
          component: () => import('../views/admin/artist/View.vue')
        },
        {
          path: ':id/edit',
          name: 'editArtist',
          component: () => import('../views/admin/artist/Edit.vue')
        }
      ]
    },
    {
      path: '/admin/album',
      name: 'album',
      component: () => import('../views/admin/album/Index.vue'),
      children: [
        {
          path: 'create',
          name: 'createAlbum',
          component: () => import('../views/admin/album/Create.vue')
        },
        {
          path: ':id',
          name: 'viewAlbum',
          component: () => import('../views/admin/album/View.vue')
        },
        {
          path: ':id/edit',
          name: 'editAlbum',
          component: () => import('../views/admin/album/Edit.vue')
        }
      ]
    },
    {
      path: '/admin/genre',
      name: 'genre',
      component: () => import('../views/admin/genre/Index.vue'),
      children: [
        {
          path: 'create',
          name: 'createGenre',
          component: () => import('../views/admin/genre/Create.vue')
        },
        {
          path: ':id',
          name: 'viewGenre',
          component: () => import('../views/admin/genre/View.vue')
        },
        {
          path: ':id/edit',
          name: 'editGenre',
          component: () => import('../views/admin/genre/Edit.vue')
        }
      ]
    },
    {
      path: '/admin/track',
      name: 'track',
      component: () => import('../views/admin/track/Index.vue'),
      children: [
        {
          path: 'create',
          name: 'createTrack',
          component: () => import('../views/admin/track/Create.vue')
        },
        {
          path: ':id',
          name: 'viewTrack',
          component: () => import('../views/admin/track/View.vue')
        },
        {
          path: ':id/edit',
          name: 'editTrack',
          component: () => import('../views/admin/track/Edit.vue')
        }
      ]
    }
  ]
})

export default router

