<template>
    <EasyDataTable show-index header-text-direction="center" body-text-direction="center" table-class-name="table-style"
      :headers="headers" :items="resultData">
      <!-- inisiate a variable from apis -->
      <template #item-character="{ name, name_kanji, images, mal_id }">
        <div class="player-wrapper">
          <img class="avatar" :src="images.jpg.image_url" alt="${title}" />
          <div class="text-title">
            <router-link :to="`/character/${mal_id}/`">
              <h2 class="text-url">{{ name }}</h2>
            </router-link>
            <p>({{ name_kanji }})</p>
          </div>
        </div>
      </template>
      <template #item-favorites="{ favorites }">
        <p class="text-lg">{{ favorites.toLocaleString() }}</p>
      </template>
    </EasyDataTable>
  </template>

<script>
import { useFetchEndpointData } from '../composable/useFetchEndpointData.vue';

export default {
    setup () {
        const endpoint = 'top/characters'
        const { resultData } = useFetchEndpointData(endpoint)        

        return { resultData }
    },
    data() {
    return {
      headers: [
        { text: 'CHARACTER', value: 'character' },
        { text: 'NICKNAMES', value: 'nicknames' },
        { text: 'FAVORITES', value: 'favorites' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>