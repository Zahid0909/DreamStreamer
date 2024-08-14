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
        leave-to="opacity-0"
      >
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
              <form v-on:submit.prevent="saveAlbum">
                <div>
                  <RouterLink to="/admin/album">
                    <XMarkIcon class="h-6 w-6 text-gray-400 absolute top-4 right-4 cursor-pointer hover:bg-red-500 hover:text-white hover:rounded-full" />
                  </RouterLink>
                  <div class="mt-3 sm:mt-5">
                    <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">
                      {{ album.name }}
                    </DialogTitle>
                    <div class="mt-2">
                      <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                        <div class="sm:col-span-8">
                          <label
                            for="name"
                            class="block text-sm font-medium leading-6 text-gray-900">
                            Name
                          </label>
                          <div class="mt-2">
                            <div
                              class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                              <input
                                type="text"
                                name="name"
                                id="name"
                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                v-model="album.name"/>
                            </div>
                          </div>
                        </div>

                        <div class="sm:col-span-4">
                          <label
                            for="number_of_tracks"
                            class="block text-sm font-medium leading-6 text-gray-900">
                            Number of Tracks
                          </label>
                          <div class="mt-2">
                            <div
                              class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                              <input
                                type="text"
                                name="number_of_tracks"
                                id="number_of_tracks"
                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                v-model="album.number_of_tracks"/>
                            </div>
                          </div>
                        </div>

                        <div class="sm:col-span-4">
                          <label
                            for="year"
                            class="block text-sm font-medium leading-6 text-gray-900">
                            Year
                          </label>
                          <div class="mt-2">
                            <div
                              class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                              <input
                                type="text"
                                name="year"
                                id="year"
                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                v-model="album.year"/>
                            </div>
                          </div>
                        </div>

                        <div class="sm:col-span-8">
                          <label
                            for="album_art"
                            class="block text-sm font-medium leading-6 text-gray-900">
                            Album Art
                          </label>
                          <div class="mt-2">
                            <div
                              class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                              <input
                                type="file"
                                name="album_art"
                                id="album_art"
                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"/>
                            </div>
                          </div>
                        </div>

                        <div class="sm:col-span-4">
                          <label
                            for="artist"
                            class="block text-sm font-medium leading-6 text-gray-900">
                            Artist
                          </label>
                          <div class="mt-2">
                            <div
                              class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                              <select
                                v-model="album.artist.id"
                                name="artist"
                                id="artist"
                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6">
                                <option v-for="artist in album.artist" :key="artist.id" :value="artist.id">{{ artist.name }}</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div class="sm:col-span-4">
                          <label
                            for="studio"
                            class="block text-sm font-medium leading-6 text-gray-900">
                            Studio
                          </label>
                          <div class="mt-2">
                            <div
                              class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                              <input
                                type="text"
                                name="studio"
                                id="studio"
                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"/>
                            </div>
                          </div>
                        </div>

                        <div class="sm:col-span-4">
                          <label
                            for="genre"
                            class="block text-sm font-medium leading-6 text-gray-900">
                            Genre
                          </label>
                          <div class="mt-2">
                            <div
                              class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                              <select
                                v-model="album.genre.id"
                                name="genre"
                                id="genre"
                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6">
                                <option v-for="genre in album.genre" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- <div class="text-sm text-gray-500">
                        <ul>
                          <li>Number_of_tracks: {{ album.number_of_tracks }}</li>
                          <li>Year: {{ album.year }}</li>
                          <li>Album_art: {{ album.album_art }}</li>
                          <li>All the artists:
                            <ul class="ml-5">
                              <li v-for="artist in album.artist" :key="artist.id">
                                <span>{{ artist.name }}</span>
                              </li>
                            </ul>
                          </li>
                          <li>Studio: {{ album.studio }}</li>
                          <li>Genre: 
                            <ul class="ml-5">
                              <li v-for="genre in album.genre" :key="genre.id">
                                <span>{{ genre.name }}</span>
                              </li>
                            </ul>
                          </li>
                          <li>Sort_order: {{ album.sort_order }}</li>
                          <li>Status: {{ album.status }}</li>
                        </ul>
                      </div> -->

                    </div>
                  </div>
                </div>
                <div class="mt-5 sm:mt-6 flex gap-8">
                  <RouterLink
                    type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                    to="/admin/album"
                    ref="cancelButtonRef">
                    Back
                  </RouterLink>
                  <button
                    type="submit"
                    class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2">
                    Save
                  </button>
                </div>
              </form>
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
import { RouterLink, useRouter } from 'vue-router'

const open = ref(true)

const router = useRouter()

const album = ref({
  id: null,
  name: '',
  number_of_tracks: 0,
  year: new Date().getFullYear(),
  album_art: '',
  artist: [
    { id: 1, name: 'Costa' },
    { id: 2, name: 'K Mac' },
    { id: 3, name: 'Ravi Jay' },
  ],
  studio: '',
  genre: [
    { id: 1, name: 'Rock' },
    { id: 2, name: 'Pop' },
    { id: 3, name: 'Rap' },
    { id: 4, name: 'Jazz' },
  ],
  sort_order: 0,
  status: false
})

const saveAlbum = () => {
  console.log(album)

  // Call the API or function to create a new album here

  // route the user to the album list page
  router.push('/admin/album')
}
</script>
