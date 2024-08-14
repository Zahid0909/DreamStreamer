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
              <form v-on:submit.prevent="saveTrack">
                <div>
                  <RouterLink to="/admin/track">
                    <XMarkIcon class="h-6 w-6 text-gray-400 absolute top-4 right-4 cursor-pointer hover:bg-red-500 hover:text-white hover:rounded-full" />
                  </RouterLink>
                  <div class="mt-3 sm:mt-5">
                    <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">
                      {{ track.name }}
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
                                v-model="track.name"/>
                            </div>
                          </div>
                        </div>

                        <div class="sm:col-span-8">
                          <label
                            for="artist"
                            class="block text-sm font-medium leading-6 text-gray-900">
                            Artist
                          </label>
                          <div class="mt-2">
                            <div
                              class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                              <select
                                name="artist"
                                id="artist"
                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                v-model="track.artist.id">
                                <option v-for="artist in track.artist" :key="artist.id" :value="artist.id">{{ artist.name }}</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div class="sm:col-span-8">
                          <label
                            for="album"
                            class="block text-sm font-medium leading-6 text-gray-900">
                            Album
                          </label>
                          <div class="mt-2">
                            <div
                              class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                              <select
                                name="album"
                                id="album"
                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                v-model="track.album.id">
                                <option v-for="album in track.album" :key="album.id" :value="album.id">{{ album.name }}</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div class="sm:col-span-8">
                          <label
                            for="genre"
                            class="block text-sm font-medium leading-6 text-gray-900">
                            Genre
                          </label>
                          <div class="mt-2">
                            <div
                              class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                              <select
                                name="genre"
                                id="genre"
                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                v-model="track.genre.id">
                                <option v-for="genre in track.genre" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div class="sm:col-span-8">
                          <label
                            for="duration"
                            class="block text-sm font-medium leading-6 text-gray-900">
                            Duration
                          </label>
                          <div class="mt-2">
                            <div
                              class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                              <input
                                type="number"
                                name="duration"
                                id="duration"
                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                v-model="track.duration"/>
                            </div>
                          </div>
                        </div>

                        <div class="sm:col-span-8">
                          <label
                            for="file_path"
                            class="block text-sm font-medium leading-6 text-gray-900">
                            File Path
                          </label>
                          <div class="mt-2">
                            <div
                              class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                              <input
                                type="text"
                                name="file_path"
                                id="file_path"
                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                v-model="track.file_path"/>
                            </div>
                          </div>
                        </div>

                        <div class="sm:col-span-3">
                          <label
                            for="sort_order"
                            class="block text-sm font-medium leading-6 text-gray-900">
                            Sort Order
                          </label>
                          <div class="mt-2">
                            <div
                              class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                              <input
                                type="number"
                                name="sort_order"
                                id="sort_order"
                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                v-model="track.sort_order"/>
                            </div>
                          </div>
                        </div>

                        <div class="sm:col-span-3">
                          <label for="status" class="block text-sm font-medium leading-6 text-gray-900">
                            Status
                          </label>
                          <div class="mt-2">
                            <div>
                              <input type="checkbox" name="status" id="status"
                                v-model="track.status"/>
                            </div>
                          </div>
                        </div>

                        <div class="sm:col-span-6">
                          <label
                            for="avatar"
                            class="block text-sm font-medium leading-6 text-gray-900">
                            Image
                          </label>
                          <div class="mt-2">
                            <div
                              class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                              <input
                                type="file"
                                name="avatar"
                                id="avatar"
                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"/>
                            </div>
                          </div>
                        </div>

                      </div>

                      <!-- <div class="text-sm text-gray-500">
                        <ul>
                          <li>Id: {{ track.id }}</li>
                          <li>Name: {{ track.name }}</li>
                          <li>Artist: {{ track.artist.name }}</li>
                          <li>Album: {{ track.album.map((album) => album.name).join(', ') }}</li>
                          <li>Genre: {{ track.genre.name }}</li>
                          <li>Duration: {{ track.duration }}</li>
                          <li>File path: {{ track.file_path }}</li>
                          <li>Sort order: {{ track.sort_order }}</li>
                          <li>Status: {{ track.status }}</li>
                          <li>Image: {{ track.avatar }}</li>
                        </ul>
                      </div> -->

                    </div>
                  </div>
                </div>
                <div class="mt-5 sm:mt-6 flex gap-8">
                  <RouterLink
                    type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                    to="/admin/track"
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
import { useRouter } from 'vue-router'

const open = ref(true)

const router = useRouter()

const track = ref({
    id: null,
    name: '',
    file_path: 'file-path.io',
    avatar:'IMAGE_URL',
    duration: null,
    artist: [
      { id: 1, name: 'Michael Jackson' },
      { id: 2, name: 'Whitney Houston' }],
    album: [
      { id: 1, name: 'Thriller' },
      { id: 2, name: 'Bad' }
    ],
    genre: [
      { id: 1, name: 'Rock' },
      { id: 2, name: 'Pop' }
    ],
    sort_order: 1,
    status: false,
  })

const saveTrack = () => {
  console.log(track)

  // route the user to the track list page
  router.push('/admin/track')
}
</script>
