<script setup>
import SearchBar from './SearchBar.vue'
</script>
<template>
  <header aria-label="Site Header">
    <div class="flex py-2 mx-auto items-center justify-between max-w-5xl">
      <div class="lg:flex items-center pr-4 bg-white">
        <router-link to="/">
          <img src="https://cdn.myanimelist.net/images/mal-logo-xsmall.png" alt="malIcon" />
        </router-link>
      </div>
    </div>
    <div class="flex mx-auto items-center justify-between bg-[#2e51a2] max-w-5xl py-2">
      <nav
      aria-label="Site Nav"
      class="text-white font-jost space-x-6 font-bold text-md lg:w-0 lg:flex-1 pl-2"
      >
      <router-link class="text-white hover:bg-gray-600" to="/">Home</router-link>
      <router-link class="text-white hover:bg-gray-600" to="/anime">Anime</router-link>
      <router-link class="text-white hover:bg-gray-600" to="/people">People</router-link>
      <router-link class="text-white hover:bg-gray-600" to="/character">Characters</router-link>
      <!-- <router-link class="text-white hover:bg-gray-600" to="/anime-list">Add Anime ➕</router-link> -->
    </nav>
    <SearchBar />
    <!-- <div class="items-center gap-4 lg:flex hidden md:hidden sm:block">
      <DarkToggle />
    </div> -->
  </div>
  <div class="mx-auto max-w-5xl pl-2 py-1 bg-[#e1e7f5] border-[#e1e7f5] text-xl font-bold overflow-auto block">
    Welcome to MyAnimeList Clone!
  </div>

  <!-- <div
    class="border-b  border-gray-100 lg:hidden bg-white dark:bg-slate-800 flex mx-auto items-center justify-between max-w-5xl">
    <nav class="flex items-center space-x-4 justify-center overflow-x-auto p-4 text-sm font-medium">
      <router-link class="text-gray-900 dark:text-white" to="/">Home</router-link>
      <router-link class="text-gray-900 dark:text-white" to="/about">About</router-link>
      <router-link class="text-gray-900 dark:text-white" to="/blog">Blog</router-link>
      <router-link class="text-gray-900 dark:text-white" to="/projects">Projects</router-link>
    </nav>
    <div class="items-center gap-4 lg:flex">
      <DarkToggle />
    </div>
  </div> -->
</header>
</template>