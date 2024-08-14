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
          <h1 class="text-base font-semibold leading-6 text-gray-900">Albums</h1>
          <p class="mt-2 text-sm text-gray-700">A list of all the albums in this system.</p>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <RouterLink to="/admin/album/create"
            type="button"
            class="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Add Album
          </RouterLink>
        </div>
      </div>
      <div class="mt-2 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    ID
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Name
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Year
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Artist
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Studio
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Genre
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="album in albums" :key="album.id">
                  <td
                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                    {{ album.id }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ album.name }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ album.year }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ album.artist.name }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ album.studio }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ album.genre }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <span v-if="album.status" class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
                    <span v-else class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">Inactive</span>
                  </td>
                  <td
                    class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <RouterLink
                      :to="`/admin/album/${album.id}`"
                      class="text-indigo-600 hover:text-indigo-900">
                      View
                      <span class="sr-only">, {{ album.name }}</span>
                    </RouterLink>
                    |
                    <RouterLink
                      :to="`/admin/album/${album.id}/edit`"
                      class="text-indigo-600 hover:text-indigo-900">
                      Edit
                      <span class="sr-only">, {{ album.name }}</span>
                    </RouterLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script setup>
import { ref } from 'vue';
import AdminDashboard from '../AdminDashboard.vue';
import { RouterLink } from 'vue-router';
import { ArrowLeftIcon } from '@heroicons/vue/20/solid';

const albums = ref([]);

fetch('https://h3ofpd5s5b.execute-api.ap-southeast-1.amazonaws.com/dev/albums')
  .then((response) => response.json())
  .then((response) => {
    console.log(response)
    albums.value = response.body
  })

// const albums = [
//   {
//     id: 1,
//     name: 'Paata',
//     number_of_tracks: 8,
//     year: 2020,
//     album_art: 'IMAGE_URL',
//     artist: {
//       id: 1,
//       name: 'Costa',
//       avatar: 'IMAGE_URL'
//     },
//     studio: 'COSTA Songs',
//     genre: 'RAP',
//     sort_order: 0,
//     status: true // Published etc.
//   },
//   {
//     id: 2,
//     name: 'Paata',
//     number_of_tracks: 8,
//     year: 2020,
//     album_art: 'IMAGE_URL',
//     artist: {
//       id: 1,
//       name: 'Costa',
//       avatar: 'IMAGE_URL'
//     },
//     studio: 'COSTA Songs',
//     genre: 'RAP',
//     sort_order: 0,
//     status: false // Published etc.
//   },
//   {
//     id: 3,
//     name: 'Paata',
//     number_of_tracks: 8,
//     year: 2020,
//     album_art: 'IMAGE_URL',
//     artist: {
//       id: 1,
//       name: 'Costa',
//       avatar: 'IMAGE_URL'
//     },
//     studio: 'COSTA Songs',
//     genre: 'RAP',
//     sort_order: 0,
//     status: true // Published etc.
//   },
//   {
//     id: 4,
//     name: 'Paata',
//     number_of_tracks: 8,
//     year: 2020,
//     album_art: 'IMAGE_URL',
//     artist: {
//       id: 1,
//       name: 'Costa',
//       avatar: 'IMAGE_URL'
//     },
//     studio: 'COSTA Songs',
//     genre: 'RAP',
//     sort_order: 0,
//     status: true // Published etc.
//   }
// ]
</script>
<style></style>
