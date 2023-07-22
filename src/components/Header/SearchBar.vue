<template>
  <div>
    <div class="flex justify-end items-center relative">
      <input
        ref="searchBox"
        type="text"
        class="bg-white mr-3 focus:outline-none focus:outline-shawod"
        placeholder="Search Anime..."
        @input="debounceSearch"
        v-model="searchTerm"
        @focus="handleFocus"
      />
      <!-- <svg class=" fill-current w-4 text-gray-300 mr-2" viewBox="0 0 24 24">
        <path d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"
        />
      </svg> -->
    </div>
    <div class="absolute mt-2 border-2 border-gray-200 bg-white w-48 z-50">
      <ul class="" v-if="showSearchResult">
        <p v-if="!showSearchResult">Loading...</p>
        <li :key="index" v-for="(anime, index) in searchResult">
          <router-link
            :to="`/anime/${anime.mal_id}`"
            @click="showSearchResult = false"
            class="flex items-center border-b border-gray-200 p-1"
          >
            <img :src="anime.images.jpg.image_url" alt="" class="w-10" />
            <div class="flex flex-col ml-2 text-sm">
              <p>{{ anime.title }} ({{ anime.type }})</p>
              <p class="text-xs">{{ anime.aired.string }}</p>
            </div>
          </router-link>
        </li>
      </ul>
      <ul class="px-3" v-if="searchResult.length == 0 && showSearchResult">
        <li>No result found for "{{ searchTerm }}"</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchResult: [],
      searchTerm: '',
      showSearchResult: false,
    }
  },
  mounted() {
    this.keyboardEvents()
  },
  methods: {
    debounceSearch(event) {
      clearTimeout(this.debounce)
      this.debounce = setTimeout(() => {
        if (event.target.value.length > 3) {
          this.fetchSearch(event.target.value)
        } else {
          this.showSearchResult = false
        }
      }, 600)
    },

    async fetchSearch(term) {
      try {
        const response = await fetch('https://api.jikan.moe/v4/anime?q=' + term)
        const responseData = await response.json()
        if (responseData && responseData.data) {
          this.searchResult = responseData.data
          this.showSearchResult = responseData.data ? true : false
          //console.log(this.searchResult)
        } else {
          throw new Error('Invalid response format')
        }
      } catch (error) {
        //console.log(error)
      }
    },

    handleFocus() {
      if (this.searchTerm != '') {
        this.showSearchResult = true
      }
    },
    keyboardEvents() {
      let windowObj = this
      window.addEventListener('click', (e) => {
        if (!this.$el.contains(e.target)) {
          this.showSearchResult = false
        }
      })

      window.addEventListener('keypress', (e) => {
        if (e.keyCode == '47') {
          e.preventDefault()
          windowObj.$refs.searchBox.focus()
        }
      })
      window.addEventListener('keydown', (e) => {
        if (e.key == 'Escape') {
          this.showSearchResult = false
        }
      })
    },
  }
}
</script>
