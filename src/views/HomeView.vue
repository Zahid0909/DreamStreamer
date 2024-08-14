<template>
  <div class="flex flex-1">
    <div>
      <TemplateView/>
    </div>
    <main class="flex-1">
      <div class="flex bg-gray-100 pb-24 pt-5 sm:pb-32">
        <div class="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div class="mx-auto max-w-2xl">
            <h2 class="text-3xl font-bold tracking-tight text-black sm:text-4xl">Albums</h2>
            <p class="mt-4 text-lg leading-8 text-gray-600">
              This is the Albums page. Here you can view all the albums in DreamSreamer.
            </p>
          </div>
          
          <div class="flex gap-2 items-end mt-5">
            <!-- <label for="year" class="block text-lg font-medium text-gray-700">Select Year</label> -->
            <select 
              v-model="year"
              id="year" name="year" class="mt-1 block
              w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option value="" selected>Select Year</option>
              <option value="2005">2005</option>
              <option value="2012">2012</option>
              <option value="2016">2016</option>
            </select>

            <button type="button" @click="getAlbums" class="mt-2">
              FILTER
            </button>

          </div>

          
          <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            <li v-for="album in albums" :key="album.id" class="rounded-2xl bg-gray-200 px-8 py-10">
              <RouterLink :to="`/${album.id}`">
                
              <img class="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" :src="album.album_art" alt="album_art" />
              <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-black">{{ album.name }}</h3>
              <p class="text-sm leading-6 text-gray-600">{{ album.year }}</p>
              </RouterLink>
            </li>
            
          </ul>
        </div>
      </div>
    </main>
  </div>
<router-view />
</template>

<script type="module">

import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import TemplateView from './TemplateView.vue';


export default {

  components: {
    TemplateView
  },

  setup() {

    const albums = ref([]);
    const year = ref("");
    
    onMounted(() => {
      getAlbums()
    })

    function getAlbums() {
      
      fetch('https://h3ofpd5s5b.execute-api.ap-southeast-1.amazonaws.com/dev/albums?year=' + year.value)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        albums.value = response.body
      })
    }

    return {
      getAlbums,
      year,
      albums
    }
  }
}

</script>