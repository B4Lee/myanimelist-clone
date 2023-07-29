<script>
import { ref, watchEffect, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useLoadingStore } from '../store'

export function useFetchId(endpoint) {
  const anime = ref([])
  const character = ref([])
  const people = ref([])
  const isLoading = useLoadingStore()

  // Fetch anime data from the provided API endpoint
  async function fetchAnime(id) {
    isLoading.setLoading(true)
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const responseData = await response.json()
      if (responseData && responseData.data) {
        anime.value = responseData.data
      } else {
        throw new Error('Invalid response format')
      }
    } catch (error) {
      console.error(error)
    } finally {
      isLoading.setLoading(false)
    }
  }

  // Fetch character data from the provided API endpoint
  async function fetchCharacter(id) {
    isLoading.setLoading(true)
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/${endpoint}`)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const responseData = await response.json()
      if (responseData && responseData.data) {
        character.value = responseData.data.slice().sort((a, b) => b.favorites - a.favorites)
        // console.log(character.value[0].voice_actors)
        // const picked = (({ voice_actors }) => ({voice_actors}))(character.value)
        // animes.value.push(picked)
        // console.log(animes.value)
        // const japaneseVoiceActors = character.value.voice_ators.filter(actor => actor.language === "Japanese");
        // // If there are Japanese voice actors, show the data; otherwise, return null or an empty array
        // if (japaneseVoiceActors.length > 0) {
        //   // Show the data
        //   console.log(japaneseVoiceActors);
        // } else {
        //   // Return null or an empty array (choose one)
        //   console.log(null); // Or console.log([]);
        // }
      } else {
        throw new Error('Invalid response format')
      }
    } catch (error) {
      console.error(error)
    } finally {
      isLoading.setLoading(false)
    }
  }

  // Fetch People data from the provided API endpoint
  async function fetchPeople(id) {
    isLoading.setLoading(true)
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/${endpoint}`)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const responseData = await response.json()
      if (responseData && responseData.data) {
        people.value = responseData.data
      } else {
        throw new Error('Invalid response format')
      }
    } catch (error) {
      console.error(error)
    } finally {
      isLoading.setLoading(false)
    }
  }

  const posterPath = computed(() => {
    return anime.value.images?.jpg?.image_url
  })

  const japaneseVoiceActors = computed(() => {
    return character.value.flatMap((item) =>
      item.voice_actors.filter((actor, index, self) => {
        return (
          actor.language === 'Japanese' &&
          self.findIndex((a) => a.language === 'Japanese') === index
        )
      })
    )
  })

  // console.log(japaneseVoiceActors)

  // Watch the route and fetch data when the route changes
  const route = useRoute()
  watchEffect(() => {
    isLoading.value = true
    const animeId = route.params.id
    fetchAnime(animeId)
    fetchCharacter(animeId)
    fetchPeople(animeId)
  })

  return { anime, character, isLoading, japaneseVoiceActors, posterPath }
}
</script>