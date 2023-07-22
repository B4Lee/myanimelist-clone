<template>
  <div class="mx-auto max-w-5xl border-2 border-gray-200 space-y-2">
    <h2 class="text-xl font-semibold pl-2">Most Popular</h2>
    <AnimeItem :fetchProps="this.favoriteAnime" />
    <h2 class="text-xl font-semibold pl-2">Top Airing Anime</h2>
    <AnimeItem :fetchProps="this.topAiring.slice(0, 10)" />
    <h2 class="text-xl font-semibold pl-2">Top Upcoming Anime</h2>
    <AnimeItem :fetchProps="this.upcomingAnime.slice(0, 10)" />
  </div>
</template>

<script>
import AnimeItem from '../components/HomeView/AnimeItem.vue'
// import SkeletonLoader from '../components/SkeletonLoader.vue'

export default {
  components: {
    AnimeItem
    // SkeletonLoader
  },


  data() {
    return {
      upcomingAnime: [],
      topAiring: [],
      favoriteAnime: [],
      isLoading: true
    }
  },

  async mounted() {
    this.fetchUpcomingAnime()
    try {
      const response = await fetch(`https://api.jikan.moe/v4/seasons/now`)
      const responseData = await response.json()
      if (responseData && responseData.data) {
        this.topAiring = responseData.data
        // console.log(this.topAiring)
      } else {
        throw new Error('Invalid response format')
      }
    } catch (error) {
      console.error(error)
    }
    try {
      const response = await fetch(`https://api.jikan.moe/v4/top/anime?filter=favorite`)
      const responseData = await response.json()
      if (responseData && responseData.data) {
        this.favoriteAnime = responseData.data
        // console.log(this.topAiring)
      } else {
        throw new Error('Invalid response format')
      }
    } catch (error) {
      console.error(error)
    }
  },

  methods: {
    throwError() {
      throw new Error('Sentry Error');
    },
    async fetchUpcomingAnime() {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/seasons/upcoming`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const responseData = await response.json()
        if (responseData && responseData.data) {
          this.upcomingAnime = responseData.data
          this.isLoading = false
        } else {
          throw new Error('Invalid response format')
        }
      } catch (error) {
        console.error(error)
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>