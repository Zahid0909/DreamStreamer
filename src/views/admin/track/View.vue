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
                <RouterLink to="/admin/track">
                    <XMarkIcon class="h-6 w-6 text-gray-400 absolute top-4 right-4 cursor-pointer hover:bg-red-500 hover:text-white hover:rounded-full" />
                  </RouterLink>
                <div class="mt-3 sm:mt-5">
                  <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">
                    {{ track.id }}. {{ track.name }}
                  </DialogTitle>
                  <div class="mt-2">
                    <div class="text-sm text-gray-500">
                      <ul>
                        <li>Avatar: <img :src="track.avatar" alt="Track image"></li>
                        <li>Id: {{track.id}}</li>
                        <li>Duration: {{ track.duration }}</li>
                        <li>Artist: {{ track.artist ? track.artist.name : 'Loading...' }}</li>
                        <li>Album: {{ track.album ? track.album.map((album) => album.name).join(', ') : 'Loading...' }}</li>
                        <li>Genre: {{ track.genre ? track.genre.name : 'Loading...' }}</li>
                        <li>File path: {{ track.file_path }}</li>
                        <li>Status: {{ track.status }}</li>
                        <li>Sort order: {{ track.sort_order }}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6">
                <RouterLink
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                  to="/admin/track"
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

const route = useRoute()
const open = ref(true)
const track = ref([]);

fetch('https://v7dummp5nl.execute-api.eu-north-1.amazonaws.com/dev/tracks?id='+route.params.id)
  .then((response) => response.json())
  .then((response) => {
    console.log(response)
    track.value = response.body[0]
  })
// const track = {
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
//   }
</script>