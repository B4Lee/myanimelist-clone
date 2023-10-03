<template>
  <div class="relative bottom-8">
    <h1 class="pl-2 mx-auto max-w-5xl bg-[#e1e7f5] text-lg font-bold">{{this.characterFull.name}}</h1>
    <div class="mx-auto max-w-5xl grid grid-cols-4 pt-2 border-2 border-t-2 border-gray-200">
      <SlotComponent>
        <!-- SLOT: POSTER -->
        <template #poster>
          <img :src="this.characterFull.images?.jpg?.image_url" class="pr-1" />
        </template>
        
        <!-- SLOT: CONTENT -->
        <template #content>
          <div class="space-y-14">
            <!-- Your content goes here -->
            <div class="flex flex-col">
              <h2 class="text-sm font-bold border-b-2 border-gray-300">{{this.characterFull.name}} ({{this.characterFull.name_kanji}})</h2>
              <p class="text-xs whitespace-pre-line">{{ this.characterFull.about }}</p>
            </div>
          </div>
        </template>

      </SlotComponent>
    </div>
  </div>
</template>

<script>
import SlotComponent from '../components/SlotComponent.vue'

export default {
  components: {
    SlotComponent
  },
  data() {
    return {
      characterFull: []
    }
  },
  watch: {
    '$route.params.id': {
      handler() {
        this.fetchCharacter(this.$route.params.id)
      },
      immediate: true
    }
  },
  methods: {
    async fetchCharacter(id) {
      this.$isLoading.setLoading(true)
      try {
        const response = await fetch(`https://api.jikan.moe/v4/characters/${id}/full`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const responseData = await response.json()
        if (responseData && responseData.data) {
          this.characterFull = responseData.data
          this.$isLoading.setLoading(false)
          //console.log(this.characterFull)
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
