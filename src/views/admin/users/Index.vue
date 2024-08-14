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
              <h1 class="text-base font-semibold leading-6 text-gray-900">Users</h1>
              <p class="mt-2 text-sm text-gray-700">A list of all the user in this system.</p>
            </div>
            <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
              <RouterLink
                to="/admin/users/create"
                type="button"
                class="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Add Users
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
                    Frst Name
                  </th>
                  <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                    Last Name
                  </th>
                  <th scope="col" class="px-10 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                    Country
                  </th>
                  <th scope="col" class="px-8 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                    Email
                  </th>
                  <th scope="col" class="px-12 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500">
                    Age
                  </th>
                  <th scope="col" class="px-12 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500">
                    Subscription
                  </th>
                  <th scope="col" class="px-12 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500">
                    Status
                  </th>
                  <th scope="col" class="px-6 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                    Phone
                  </th>
                  <th scope="col" class="relative px-12 py-3.5">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody
                class="bg-white divide-y divide-gray-200">
                <tr v-for="user in users" :key="user.id">
                  <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                    <div class="text-center">
                      <h2 class="font-medium text-gray-800">{{ user.id }}</h2>
                    </div>
                  </td>
                  <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                  <div class="flex items-center">
                    <div class="h-11 w-11 ml-6 flex-shrink-0">
                      <img class="h-11 w-11 rounded-full" :src="user.avatar" alt="user image" />
                    </div>
                    <div class="ml-4">
                      <div class="font-medium text-gray-900">{{ user.first_name }}</div>
                    </div>
                  </div>
                </td>
                  <td class="px-4 py-4 text-sm whitespace-nowrap">
                    <div class="flex items-center">
                      <h2 class="font-medium text-gray-800">{{ user.last_name }}</h2>
                    </div>
                  </td>
                  <td class="px-10 py-4 text-sm font-medium whitespace-nowrap">
                    <div class="text-center">
                      <h2 class="font-medium text-gray-800">{{ user.country }}</h2>
                    </div>
                  </td>
                  <td class="px-8 py-4 text-sm font-medium whitespace-nowrap">
                    <div class="text-center">
                      <h2 class="font-medium text-gray-800">{{ user.email }}</h2>
                    </div>
                  </td>
                  <td class="px-12 py-4 text-sm text-center font-medium whitespace-nowrap">
                    <div class="text-center">
                      <h2 class="font-medium text-gray-800">{{ user.age }}</h2>
                    </div>
                  </td>
                  <td class="px-12 py-4 text-sm text-center font-medium whitespace-nowrap">
                    <div class="text-center">
                      <h2 class="font-medium text-gray-800">{{ user.subscription }}</h2>
                    </div>
                  </td>
                  <td class="px-12 py-4 text-sm text-center font-medium whitespace-nowrap">
                    <div v-if="user.status"
                      class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 bg-emerald-100/60">
                      Active
                    </div>
                    <div v-else
                      class="inline px-3 py-1 text-sm font-normal rounded-full text-red-500 bg-red-100/60">
                      Inactive
                    </div>
                  </td>
                  <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">
                    <div class="text-center">
                      <h2 class="font-medium text-gray-800">{{ user.phone }}</h2>
                    </div>
                  </td>
                  <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                    <RouterLink
                          :to="`/admin/users/${user.id}`"
                      type="button"
                      class="inline-flex items-center px-3 py-1.5 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50">
                      View
                    </RouterLink>
                    <RouterLink
                      :to="`/admin/users/${user.id}/edit`"
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

const users = ref([]);

fetch('https://h3ofpd5s5b.execute-api.ap-southeast-1.amazonaws.com/dev/users')
  .then((response) => response.json())
  .then((response) => {
    console.log(response)
    users.value = response.body
  })

// const users = [
//   {
//     id: 1,
//     avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     first_name: 'Billie Jean',
//     last_name: 'Jean',
//     email: 'test@test.com',
//     password: 'password', // should be hashed
//     age: 20,
//     country: 'USA',
//     subscription: 'free',
//     phone: '+94771234567',
//     status: true,
//   },
//   {
//     id: 2,
//     avatar:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     first_name: 'Billie Jean',
//     last_name: 'Jean',
//     email: 'test@test.com',
//     password: 'password', // should be hashed
//     age: 20,
//     country: 'USA',
//     subscription: 'personal',
//     phone: '+94771234567',
//     status: false,
//   },
//   {
//     id: 3,
//     avatar:'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     first_name: 'Billie Jean',
//     last_name: 'Jean',
//     email: 'test@test.com',
//     password: 'password', // should be hashed
//     age: 20,
//     country: 'USA',
//     subscription: 'family',
//     phone: '+94771234567',
//     status: true,
//   },
//   {
//     id: 4,
//     avatar:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     first_name: 'Billie Jean',
//     last_name: 'Jean',
//     email: 'test@test.com',
//     password: 'password', // should be hashed
//     age: 20,
//     country: 'USA',
//     subscription: 'group',
//     phone: '+94771234567',
//     status: true,
//   },
// ]
</script>
