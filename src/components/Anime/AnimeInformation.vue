<template>
  <div class="row-span-full col-span-1 mr-3 ml-3 border-r-2">
    <img :src="posterPath" class="pr-1" />
    <div class="text-sm pt-20">
      <h2 class="text-large font-bold border-b-2 border-gray-200">Alternative title</h2>
      Synonyms:<span class="whitespace-normal inline-block font-normal" :key="index"
        v-for="(synonym, index) in anime.title_synonyms">{{ synonym }}</span>
      <p>Japanese: {{ this.anime.title_japanese }}</p>
      <p>English: {{ this.anime.title_english }}</p>
      <br />
      <h2 class="text-large font-bold border-b-2 border-gray-200">Information</h2>
      <div class="text-xs text-justify leading-6">
        <p>Type: {{ this.anime.type }}</p>
        <p>Episodes: {{ this.anime.episodes }}</p>
        <p>Status: {{ this.anime.status }}</p>
        <p>Aired: {{ this.anime.aired?.string }}</p>
        <p>Premiered: {{ this.anime.season }} {{ this.anime.year }}</p>
        Broadcast:<span> {{ this.anime.broadcast?.string }}</span>
        <PickedList title="PRODUCERS" :items="anime.producers" />
        <PickedList title="LICENSORS" :items="anime.licensors" />
        <PickedList title="STUDIOS" :items="anime.studios" />
        <PickedList title="GENRE" :items="anime.genres" />
        <PickedList title="THEMES" :items="anime.themes" />
        <!-- Producers: <p  :key="index" v-for="(producer, index) in anime.producers"> {{ producer.name }}</p><p v-if="!anime.producers.length > 0">NOT FOUND</p>
          Licensors: <p :key="index" v-for="(licensor, index) in anime.licensors"> {{ licensor.name }}</p>
          Studios:<p :key="index" v-for="(studio, index) in anime.studios"> {{ studio.name }}</p>
          Genres:<p :key="index" v-for="(genre, index) in anime.genres"> {{ genre.name }}</p>
          Themes:<p :key="index" v-for="(temes, index) in anime.themes"> {{ temes.name }}</p> -->
        Demographic: <span :key="index" v-for="(demographic, index) in anime.demographics"> {{ demographic.name}}</span>
        <p>Source: {{ this.anime.source }}</p>
        <p>Duration: {{ this.anime.duration }}</p>
        <p>Rating: {{ this.anime.rating }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PickedList from './PickedList.vue'

export default {
  components: {
    PickedList
  },
  props: {
    anime: {
      required: true
    },
    posterPath: {
      required: true
    }
  }
}
</script>
