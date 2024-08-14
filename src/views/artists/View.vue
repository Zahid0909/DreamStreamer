<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = true">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div>
                <RouterLink to="/artists">
                    <XMarkIcon class="h-6 w-6 text-gray-400 absolute top-4 right-4 cursor-pointer hover:bg-red-500 hover:text-white hover:rounded-full" />
                  </RouterLink>
                <div class="mt-3 sm:mt-5">
                  <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">
                    {{ artist.id }}. {{ artist.name }}
                  </DialogTitle>
                  <div class="mt-2">
                    <div class="text-sm text-gray-500">
                      <ul>
                        <li>Avatar: <img :src="artist.avatar" alt="Artist image"></li>
                        <li>Name: {{ artist.name }}</li>
                        <li>Bio: {{ artist.bio }}</li>
                        <li>Tracks: 
                          <ul class="ml-3">
                            <li v-for="track in artist.tracks" :key="track.id">
                              {{ track.name }} - {{ track.duration }}
                            </li>
                          </ul>
                        </li>
                        <li>Albums: 
                          <ul class="ml-3">
                            <li v-for="album in artist.albums" :key="album.id">
                              {{ album.name }} - {{ album.year }} - {{ album.genre }}
                            </li>
                          </ul>
                        </li>
                        <li>Sort order: {{ artist.sort_order }}</li>
                        <li>Status: {{ artist.status }}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6">
                <RouterLink
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                  to="/artists"
                  ref="cancelButtonRef">
                  Close
                </RouterLink>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/20/solid';
import { useRoute, RouterLink } from 'vue-router'

const open = ref(true)
const artist = ref([]);
const route = useRoute()

fetch('https://h3ofpd5s5b.execute-api.ap-southeast-1.amazonaws.com/dev/artists?id='+route.params.id)
  .then((response) => response.json())
  .then((response) => {
    console.log(response)
    artist.value = response.body[0]
  })

// const artist = 
//   {
//     id: 1,
//     name: 'Leslie Alexander',
//     bio: 'Senior Designer',
//     avatar:'IMAGE_URL',
//     tracks: [
//       { id: 1, name: 'Track 1', duration: '3:45',},
//       { id: 2, name: 'Track 2', duration: '4:45',},
//       { id: 3, name: 'Track 3', duration: '5:45',},
//       { id: 4, name: 'Track 4', duration: '6:45',},
//       { id: 5, name: 'Track 5', duration: '7:45',},
//     ],  // in the relationship with tracks, should display track details, related to artist
//     albums: [
//       { id: 1, name: 'Album 1', year: 2021, genre: 'Pop', status: true, },
//       { id: 2, name: 'Album 2', year: 2021, genre: 'Pop', status: true, },
//       { id: 3, name: 'Album 3', year: 2021, genre: 'Pop', status: true, },
//       { id: 4, name: 'Album 4', year: 2021, genre: 'Pop', status: true, },
//       { id: 5, name: 'Album 5', year: 2021, genre: 'Pop', status: true, },
//     ],  // in the relationship with albums, should display album details, related to artist
//     sort_order: 1,
//     status: true,
//   }

</script>
