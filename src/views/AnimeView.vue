<template>
  <div class="relative bottom-8">
    <h1 class="pl-2 mx-auto max-w-5xl bg-[#e1e7f5] text-lg font-bold">{{ this.anime.title }}</h1>
    <!-- <h1 class="pl-1 mx-auto text-gray-500 max-w-5xl bg-[#e1e7f5] text-md font-bold border-b-2 border-black">{{ this.anime.title_english }}</h1>
    -->
    <div class="mx-auto max-w-5xl grid grid-cols-4 pt-2 border-2 border-t-2 border-gray-200">
      <!-- IMAGE POSTER & ANIME INFORMATION -->
      <AnimeInformation :anime="anime" :posterPath="posterPath"/>
      <AnimeContent :anime="this.anime" :character="this.character" />
    </div>
  </div>
</template>

<script>
import AnimeInformation from '../components/Anime/AnimeInformation.vue'
import AnimeContent from '../components/Anime/AnimeContent.vue'

export default {
  components: {
    AnimeInformation,
    AnimeContent
  },

  computed: {
    posterPath() {
      return this.anime?.images?.jpg?.large_image_url
    }
  },

  watch: {
    '$route.params.id': {
      handler() {
        this.fetchAnime(this.$route.params.id)
        this.fetchCharacter(this.$route.params.id)
      },
      immediate: true
    }
  },

  data() {
    return {
      anime: [],
      character: [],
      animes: []
    }
  },

  methods: {
    async fetchAnime(id) {
      this.$isLoading.setLoading(true)
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const responseData = await response.json()
        if (responseData && responseData.data) {
          this.anime = responseData.data
          this.$isLoading.setLoading(false)
          // const picked = (({ broadcast, producers, licensors, genres }) => ({
          //   broadcast,
          //   producers,
          //   licensors,
          //   genres
          // }))(this.anime)
          // this.animes.push(picked)
          // console.log(this.anime)
        } else {
          throw new Error('Invalid response format')
        }
      } catch (error) {
        console.error(error)
      }
    },
    async fetchCharacter(id) {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const responseData = await response.json()
        if (responseData && responseData.data) {
          this.character = responseData.data
          // console.log(this.character)
        } else {
          throw new Error('Invalid response format')
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
