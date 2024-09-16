<template>
  <div class="flex flex-auto">
    <div>
      <AdminDashboard />
    </div>
    <div class="flex-auto px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
        <RouterLink to="/admin">
          <ArrowLeftIcon class="h-8 w-8 text-gray-600" aria-hidden="true" />
        </RouterLink>
          <h1 class="text-base font-semibold leading-6 text-gray-900">Artists</h1>
          <p class="mt-2 text-sm text-gray-700">A list of all the Artists in this system.</p>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <RouterLink to="/admin/artist/create"
            type="button"
            class="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Add Artist
          </RouterLink>
        </div>
      </div>
      <div class="flex-auto px-4">
        <ul role="list" class="divide-y divide-gray-100">
        <li v-for="artist in artists" :key="artist.id" class="flex justify-between gap-x-6 py-5">
          <div class="flex min-w-0 gap-x-4">
            <img class="h-12 w-12 flex-none rounded-full bg-gray-50" :src="artist.avatar" alt="{{ artist.avatar }}" />
            <div class="min-w-0 flex-auto">
              <p class="text-sm font-semibold leading-6 text-gray-900">
                <a :href="`/admin/artist/${artist.id}`"  class="hover:underline">{{ artist.name }}</a>
              </p>
              <p class="mt-1 flex text-xs leading-5 text-gray-500">
                {{ artist.bio }}
              </p>
            </div>
          </div>
          <div class="flex shrink-0 items-center gap-x-6">
            <div>
              <div v-if="artist.status" class="mt-1 flex items-center gap-x-1.5">
                <div class="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p class="text-xs leading-5 text-gray-500">Active</p>
              </div>
              <div v-else class="mt-1 flex items-center gap-x-1.5">
                <div class="flex-none rounded-full bg-red-500/20 p-1">
                  <div class="h-1.5 w-1.5 rounded-full bg-red-500" />
                </div>
                <p class="text-xs leading-5 text-gray-500">Inactive</p>
              </div>
            </div>
            <div class="hidden sm:flex sm:flex-col sm:items-end">
              <RouterLink
                    :to="`/admin/artist/${artist.id}`"
                type="button"
                class="inline-flex items-center px-3 py-1.5 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50">
                View
              </RouterLink>
              <RouterLink
                :to="`/admin/artist/${artist.id}/edit`"
                type="button"
                class="inline-flex items-center px-3 py-1.5 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50">
                Edit
              </RouterLink>
            </div>
            
            <Menu as="div" class="relative flex-none">
              <MenuButton class="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                <span class="sr-only">Open options</span>
                <EllipsisVerticalIcon class="h-5 w-5" aria-hidden="true" />
              </MenuButton>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']"
                      >View profile<span class="sr-only">, {{ artist.name }}</span></a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']"
                      >Message<span class="sr-only">, {{ artist.name }}</span></a
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </li>
      </ul>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script setup>
import { ref } from 'vue';
import AdminDashboard from '../AdminDashboard.vue';
import { RouterLink } from 'vue-router';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { EllipsisVerticalIcon, ArrowLeftIcon } from '@heroicons/vue/20/solid'

const artists = ref([]);

fetch('https://v7dummp5nl.execute-api.eu-north-1.amazonaws.com/dev/artists')
  .then((response) => response.json())
  .then((response) => {
    console.log(response)
    artists.value = response.body
  })

// const artists = [
//   {
//     id: 1,
//     name: 'Leslie Alexander',
//     bio: 'Senior Designer',
//     avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     tracks: [
//       { id: 1, name: 'Track 1', duration: '3:45',},
//       { id: 2, name: 'Track 2', duration: '4:45',},
//       { id: 3, name: 'Track 3', duration: '5:45',},
//       { id: 4, name: 'Track 4', duration: '6:45',},
//       { id: 5, name: 'Track 5', duration: '7:45',},
//     ],
//     albums: [
//       { id: 1, name: 'Album 1', year: 2021, genre: 'Pop', status: true, },
//       { id: 2, name: 'Album 2', year: 2021, genre: 'Pop', status: true, },
//       { id: 3, name: 'Album 3', year: 2021, genre: 'Pop', status: true, },
//       { id: 4, name: 'Album 4', year: 2021, genre: 'Pop', status: true, },
//       { id: 5, name: 'Album 5', year: 2021, genre: 'Pop', status: true, },
//     ],
//     sort_order: 1,
//     status: true,
//   },
//   {
//     id: 2,
//     name: 'Michael Foster',
//     bio: 'Senior Designer',
//     avatar:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     tracks: [
//       { id: 1, name: 'Track 1', duration: '3:45',},
//       { id: 2, name: 'Track 2', duration: '4:45',},
//       { id: 3, name: 'Track 3', duration: '5:45',},
//       { id: 4, name: 'Track 4', duration: '6:45',},
//       { id: 5, name: 'Track 5', duration: '7:45',},
//     ],
//     albums: [
//       { id: 1, name: 'Album 1', year: 2021, genre: 'Pop', status: true, },
//       { id: 2, name: 'Album 2', year: 2021, genre: 'Pop', status: true, },
//       { id: 3, name: 'Album 3', year: 2021, genre: 'Pop', status: true, },
//       { id: 4, name: 'Album 4', year: 2021, genre: 'Pop', status: true, },
//       { id: 5, name: 'Album 5', year: 2021, genre: 'Pop', status: true, },
//     ],
//     sort_order: 2,
//     status: null,
//   },
//   {
//     id: 3,
//     name: 'Dries Vincent',
//     bio: 'Senior Designer',
//     avatar:'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     tracks: [
//       { id: 1, name: 'Track 1', duration: '3:45',},
//       { id: 2, name: 'Track 2', duration: '4:45',},
//       { id: 3, name: 'Track 3', duration: '5:45',},
//       { id: 4, name: 'Track 4', duration: '6:45',},
//       { id: 5, name: 'Track 5', duration: '7:45',},
//     ],
//     albums: [
//       { id: 1, name: 'Album 1', year: 2021, genre: 'Pop', status: true, },
//     ],
//     sort_order: 3,
//     status: true,
//   },
//   {
//     id: 4,
//     name: 'Lindsay Walton',
//     bio: 'Senior Designer',
//     avatar:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     tracks: [
//       { id: 1, name: 'Track 1', duration: '3:45',},
//       { id: 2, name: 'Track 2', duration: '4:45',},
//       { id: 3, name: 'Track 3', duration: '5:45',},
//       { id: 4, name: 'Track 4', duration: '6:45',},
//       { id: 5, name: 'Track 5', duration: '7:45',},
//     ],
//     albums: [
//       { id: 1, name: 'Album 1', year: 2021, genre: 'Pop', status: true, },
//     ],
//     sort_order: 4,
//     status: true,
//   },
// ]
</script>

