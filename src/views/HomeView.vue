<template>
  <div class="mx-auto max-w-5xl border-2 border-gray-200 space-y-2">
    <AnimeHomeView endpoint="top/anime?filter=favorite" title="Most Popular" />
    <AnimeHomeView endpoint="seasons/now" title="Top Airing Anime" />
    <AnimeHomeView endpoint="seasons/upcoming" title="Top Upcoming Anime" />
  </div>
</template>

<script>
import AnimeHomeView from '../components/HomeView/AnimeItem.vue'

export default {
  components: {
    AnimeHomeView
  }
}
</script>
<!-- <script>
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
</script> -->