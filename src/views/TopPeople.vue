<template>
  <EasyDataTable show-index header-text-direction="center" body-text-direction="center" table-class-name="table-style"
    :headers="headers" :items="resultData">
    <!-- inisiate a variable from apis -->
    <template #item-people="{ name, given_name, family_name, images, mal_id }">
      <div class="player-wrapper">
        <img class="avatar" :src="images.jpg.image_url" alt="${title}" />
        <div class="text-title">
          <router-link :to="`/people/${mal_id}/`">
            <h2 class="text-url">{{ name }}</h2>
          </router-link>
          <p>({{ family_name }} {{ given_name }})</p>
        </div>
      </div>
    </template>
    <template #item-birthday="{ birthday }">
      <p class="text-lg">{{ birthday.substring(0, 10) }}</p>
    </template>
    <template #item-favorites="{ favorites }">
      <p class="text-lg">{{ favorites.toLocaleString() }}</p>
    </template>
  </EasyDataTable>
</template>

<script>
import { defineComponent } from 'vue'
import { useFetchEndpointData } from '../composable/useFetchEndpointData.vue'

export default defineComponent({
  setup() {
    const endpoint = 'top/people' // Replace with your desired endpoint
    const { resultData } = useFetchEndpointData(endpoint)

    return { resultData }
  },

  data() {
    return {
      headers: [
        { text: 'PEOPLE', value: 'people' },
        { text: 'BIRTHDAY (Year-Month-Day)', value: 'birthday' },
        { text: 'FAVORITES', value: 'favorites' }
      ]
    }
  }

  // mounted() {
  //   this.fetchPeople()
  // },

  // methods: {
  //   async fetchPeople() {
  //     try {
  //       const response = await fetch(`https://api.jikan.moe/v4/top/people`)
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok')
  //       }
  //       const responseData = await response.json()
  //       if (responseData && responseData.data) {
  //         this.people = responseData.data
  //         // console.log(this.people)
  //       } else {
  //         throw new Error('Invalid response format')
  //       }
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  // }
})
</script>