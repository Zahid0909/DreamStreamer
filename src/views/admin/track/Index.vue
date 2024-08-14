<template>
  <div class="flex flex-auto">
    <div>
      <AdminDashboard />
    </div>
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="inline-block min-w-full align-middle md:px-6 lg:px-8">
          <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
              <RouterLink to="/admin">
                <ArrowLeftIcon class="h-8 w-8 text-gray-600" aria-hidden="true" />
              </RouterLink>
              <h1 class="text-base font-semibold leading-6 text-gray-900">Tracks</h1>
              <p class="mt-2 text-sm text-gray-700">A list of all the track in this system.</p>
            </div>
            <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
              <RouterLink
                to="/admin/track/create"
                type="button"
                class="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Add Tracks
              </RouterLink>
            </div>
          </div>
          <div
            class="overflow-hidden border border-gray-200 md:rounded-lg my-2">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                    ID
                  </th>
                  <th scope="col" class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                    Name
                  </th>
                  <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                    Artists
                  </th>
                  <th scope="col" class="px-10 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                    Duration (s)
                  </th>
                  <th scope="col" class="px-8 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                    Albums
                  </th>
                  <th scope="col" class="px-12 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500">
                    Status
                  </th>
                  <th scope="col" class="px-6 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                    File Path
                  </th>
                  <th scope="col" class="relative px-12 py-3.5">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody
                class="bg-white divide-y divide-gray-200">
                <tr v-for="track in tracks" :key="track.id">
                  <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                    <div class="text-center">
                      <h2 class="font-medium text-gray-800">{{ track.id }}</h2>
                    </div>
                  </td>
                  <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                  <div class="flex items-center">
                    <div class="h-11 w-11 ml-6 flex-shrink-0">
                      <img class="h-11 w-11 rounded-full" :src="track.avatar" alt="track image" />
                    </div>
                    <div class="ml-4">
                      <div class="font-medium text-gray-900">{{ track.name }}</div>
                    </div>
                  </div>
                </td>
                  <td class="px-4 py-4 text-sm whitespace-nowrap">
                    <div class="flex items-center">
                      <h2 class="font-medium text-gray-800">{{ track.artist.name }}</h2>
                    </div>
                  </td>
                  <td class="px-10 py-4 text-sm font-medium whitespace-nowrap">
                    <div class="text-center">
                      <h2 class="font-medium text-gray-800">{{ track.duration }}</h2>
                    </div>
                  </td>
                  <td class="px-8 py-4 text-sm whitespace-nowrap">
                    <div>
                      <h4 v-for ="album in track.album" :key="album.id" class="font-medium text-gray-800">{{ album.name }},</h4>
                    </div>
                  </td>
                  <td class="px-12 py-4 text-sm text-center font-medium whitespace-nowrap">
                    <div v-if="track.status"
                      class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 bg-emerald-100/60">
                      Active
                    </div>
                    <div v-else
                      class="inline px-3 py-1 text-sm font-normal rounded-full text-red-500 bg-red-100/60">
                      Inactive
                    </div>
                  </td>
                  <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">
                    <div>
                      <h2 class="font-medium text-gray-800">{{ track.file_path }}</h2>
                    </div>
                  </td>
                  <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                    <RouterLink
                          :to="`/admin/track/${track.id}`"
                      type="button"
                      class="inline-flex items-center px-3 py-1.5 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50">
                      View
                    </RouterLink>
                    <RouterLink
                      :to="`/admin/track/${track.id}/edit`"
                      type="button"
                      class="inline-flex items-center ml-2 px-3 py-1.5 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50">
                      Edit
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
import { ref } from 'vue'
import AdminDashboard from '../AdminDashboard.vue'
import { RouterLink } from 'vue-router'
import { ArrowLeftIcon } from '@heroicons/vue/20/solid'

const tracks = ref([]);

fetch('https://h3ofpd5s5b.execute-api.ap-southeast-1.amazonaws.com/dev/tracks')
  .then((response) => response.json())
  .then((response) => {
    console.log(response)
    tracks.value = response.body
  })

// const tracks = [
//   {
//     id: 1,
//     name: 'Beat It',
//     file_path: 'file-path.io',
//     avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     duration: 185,
//     artist: { id: 1, name: 'Michael Jackson' },
//     album: [
//       { id: 1, name: 'Thriller' },
//       { id: 2, name: 'Bad' }
//     ],
//     genre: 
//       { id: 1, name: 'Rock' },
//     sort_order: 1,
//     status: true,
//   },
//   {
//     id: 2,
//     name: 'Billie Jean',
//     file_path: 'file-path.io',
//     avatar:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     duration: 165,
//     artist: { id: 1, name: 'Michael Jackson' },
//     album: [
//       { id: 1, name: 'Thriller' },
//       { id: 2, name: 'Bad' }
//     ],
//     genre: 
//       { id: 1, name: 'Rock' },
//     sort_order: 1,
//     status: false,
//   },
//   {
//     id: 3,
//     name: 'Thriller',
//     file_path: 'file-path.io',
//     avatar:'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     duration: 155,
//     artist: { id: 1, name: 'Michael Jackson' },
//     album: [
//       { id: 1, name: 'Thriller' },
//       { id: 2, name: 'Bad' }
//     ],
//     genre: 
//       { id: 1, name: 'Rock' },
//     sort_order: 1,
//     status: true,
//   },
//   {
//     id: 4,
//     name: 'Smooth Criminal',
//     file_path: 'file-path.io',
//     avatar:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     duration: 185,
//     artist: { id: 1, name: 'Michael Jackson' },
//     album: [
//       { id: 1, name: 'Thriller' },
//       { id: 2, name: 'Bad' }
//     ],
//     genre: 
//       { id: 1, name: 'Rock' },
//     sort_order: 1,
//     status: true,
//   },

// ]
</script>
