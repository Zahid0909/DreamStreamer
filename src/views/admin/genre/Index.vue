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
          <h1 class="text-base font-semibold leading-6 text-gray-900">Genre</h1>
          <p class="mt-2 text-sm text-gray-700">A list of all the genres including their name,  image description, status and sort order.</p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <RouterLink to="/admin/genre/create"
            type="button"
            class="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Add Genre
          </RouterLink>
      </div>
      </div>
      <div class="mt-2 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Name</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Sort Order</th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr v-for="genre in genres" :key="genre.id">
                <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                  <div class="flex items-center">
                    <div class="h-11 w-11 flex-shrink-0">
                      <img class="h-11 w-11 rounded-full" :src="genre.image" alt="genre image" />
                    </div>
                    <div class="ml-4">
                      <div class="font-medium text-gray-900">{{ genre.name }}</div>
                    </div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                  <div class="text-gray-900">{{ genre.description }}</div>
                </td>
                <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                  <span v-if="genre.status" class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
                  <span v-else class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">Inactive</span>
                </td>
                <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500 text-center">{{ genre.sort_order }}</td>
                <td class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                  <RouterLink
                      :to="`/admin/genre/${genre.id}`"
                      class="text-indigo-600 hover:text-indigo-900">
                      View
                      <span class="sr-only">, {{ genre.name }}</span>
                    </RouterLink>
                    |
                    <RouterLink
                      :to="`/admin/genre/${genre.id}/edit`"
                      class="text-indigo-600 hover:text-indigo-900">
                      Edit
                      <span class="sr-only">, {{ genre.name }}</span>
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

const genres = ref([]);

fetch('https://v7dummp5nl.execute-api.eu-north-1.amazonaws.com/dev/genres')
  .then((response) => response.json())
  .then((response) => {
    console.log(response)
    genres.value = response.body
  })

</script>