<template>
  <div class="relative bottom-8">
    <h1 class="pl-1 mx-auto max-w-5xl bg-[#e1e7f5] text-lg font-bold">{{ person.name }}</h1>
    <div
      class="mx-auto max-w-5xl grid grid-rows-1 grid-flow-col pt-2 border-[1px] border-t-2 border-gray-200"
    >
      <ItemInformation :item="person" :posterPath="posterPath"/>
      <AnimeCharacterBox :item="person" />
    </div>
  </div>
</template>
<script>
import ItemInformation from '../components/People/PeopleCharacterItem.vue'
import AnimeCharacterBox from '../components/People/AnimeCharacterBox.vue'

export default {
  components: {
    ItemInformation,
    AnimeCharacterBox
  },

  computed: {
    posterPath() {
      //   return this.imagesPath[0]
      return this.person?.images?.jpg?.image_url
    }
  },

  watch: {
    '$route.params.id': {
      handler() {
        this.fetchPerson(this.$route.params.id)
      },
      immediate: true
    }
  },

  data() {
    return {
      person: [],
      imagesPath: []
    }
  },

  methods: {
    async fetchPerson(id) {
      this.$isLoading.setLoading(true)
      try {
        const response = await fetch(`https://api.jikan.moe/v4/people/${id}/full`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const responseData = await response.json()
        if (responseData && responseData.data) {
          this.person = responseData.data
          const picked = (({ image_url }) => ({ image_url }))(this.person.images.jpg)
          this.imagesPath.push(picked)
          this.$isLoading.setLoading(false)
          //console.log(this.imagesPath[0])
          //console.log(this.person.images)
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
