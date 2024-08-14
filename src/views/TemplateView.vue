<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <aside class="flex flex-col w-72  bg-gradient-to-t from-zinc-950 text-zinc-100 p-2 gap-2 h-full">
        <nav class="p-4  bg-zinc-900/80 space-y-5 rounded-md text-white">
          <RouterLink to="/artists" class="flex justify-center text-lg font-semibold">
            Artists
          </RouterLink>
          <RouterLink to="/genres" class="flex justify-center text-lg font-semibold">
            Genres
          </RouterLink>
          <RouterLink to="/home" class="flex justify-center text-lg font-semibold">
            Albums
          </RouterLink>
          <RouterLink to="/tracks" class="flex justify-center text-lg font-semibold">
            Tracks
          </RouterLink>
        </nav>
    </aside>
</template>



