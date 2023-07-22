<template>
  <EasyDataTable
    show-index
    header-text-direction="center"
    body-text-direction="center"
    table-class-name="table-style"
    :headers="headers"
    :items="anime"
  >
    <!-- inisiate a variable from apis -->
    <template #item-title="{ title, mal_id, images, episodes, type, members }">
      <div class="player-wrapper">
        <img class="avatar" :src="images.jpg.image_url" :alt="title" />
        <div class="text-title">
          <router-link :to="`/anime/${mal_id}/`">
            <h3 class="text-url">{{ title }}</h3>
          </router-link>
          <p>{{ type }} ({{ episodes }} eps)</p>
          <p>{{ members.toLocaleString() }} members</p>
        </div>
      </div>
    </template>
    <template #item-score="{ score }">
      <span class="text-lg">⭐ {{ score }}</span>
    </template>
    <template #item-year="{ year }">
      <span class="text-lg">{{ year }}</span>
    </template>
    <template #item-status="{ status }">
      <span class="text-lg">{{ status }}</span>
    </template>
  </EasyDataTable>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      anime: [],
      headers: [
        { text: 'TITLE', value: 'title' },
        { text: 'SCORE', value: 'score' },
        { text: 'YEAR', value: 'year' },
        { text: 'STATUS', value: 'status' }
      ]
    }
  },

  mounted() {
    this.fetchAnime()
  },

  methods: {
    async fetchAnime() {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/top/anime`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const responseData = await response.json()
        if (responseData && responseData.data) {
          this.anime = responseData.data
          // let names = this.anime.map((item) => item.images.jpg.image_url)
          // this.animes.push(names)
          // console.log(this.anime)
        } else {
          throw new Error('Invalid response format')
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
})
</script>
