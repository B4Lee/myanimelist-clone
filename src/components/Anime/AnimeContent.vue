<template>
  <!-- GRID -->
  <div class="col-span-3 pt-16">
    <div class="space-y-14">
      <!-- SCORE CARD -->
      <div class="flex rounded py-2 bg-gray-100 border-[1px] border-gray-200">
        <div class="flex-col border-r-2 border-gray-300">
          <h3 class="mx-2 w-20 bg-[#2e51a2] text-[10px] text-white item-center text-center">
            SCORE
          </h3>
          <h3 class="mx-auto font-bold text-3xl text-center">
            {{ anime.score ? anime.score : 'N/A' }}
          </h3>
          <h3 class="mx-auto text-[10px] text-center">{{ anime.favorites }} Favorites</h3>
        </div>
        <div class="flex flex-nowrap font-bold ml-3 gap-4">
          <h3>Ranked #{{ anime.rank ? anime.rank : 'N/A' }}</h3>
          <h3>Popularity #{{ anime.popularity }}</h3>
          <h3>Members #{{ anime.members?.toLocaleString() }}</h3>
        </div>
      </div>
      <!-- SYNOPSIS -->
      <div class="flex flex-col">
        <h2 class="text-sm font-bold border-b-2 border-gray-300">Synopsis</h2>
        <p class="text-xs whitespace-pre-line">{{ anime.synopsis }}</p>
      </div>
      <!-- RELATED ANIME  -->
      <div class="flex flex-col">
        <h2 class="text-sm font-bold border-b-2 border-gray-300">Related Anime</h2>
        <div class="py-1 text-xs" :key="index" v-for="(related, index) in anime.relations">
          <span class="font-bold pr-2">{{ related.relation }}:</span>
          <span
            class="text-blue-800 indent-1 text-start"
            v-for="entry in related.entry"
            :key="entry.id"
            ><router-link :to="`/anime/${entry.mal_id}/`">{{ entry.name }}, </router-link></span
          >
        </div>
      </div>
      <!-- CHARACTERS & VOICE ACTORS -->
      <div>
        <h2 class="text-sm font-bold mb-2 border-gray-300">Characters & Voice Actors</h2>
        <div class="flex flex-row justify-between border-[1px] border-gray-200">
          <div class="w-1/2 space-y-2">
            <div :key="index" v-for="(item, index) in character.slice(0, 5)" class="flex text-xs">
              <img
                class="mr-1 inline-block w-[42px] h-[62px]"
                :src="item.character.images.jpg.image_url"
                alt=""
              />
              <span class="flex-row space-y-2">
                <p>{{ item.character.name }}</p>
                <p>{{ item.role }}</p>
              </span>
            </div>
          </div>

          <div class="w-1/2 space-y-2">
            <div
              :key="index"
              v-for="(item, index) in character.slice(5, 10)"
              class="flex flex-row text-xs"
            >
              <img
                class="mr-1 inline-block w-[42px] h-[62px]"
                :src="item.character.images.jpg.image_url"
                alt=""
              />
              <span class="flex-row space-y-2">
                <p>{{ item.character.name }}</p>
                <p>{{ item.role }}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- THEME SONG -->
      <div class="text-xs flex flex-row py-2">
        <div class="w-1/2">
          <h2 class="flex-row text-large font-bold border-b-2 border-gray-300">Opening Theme</h2>
          <p v-for="opening in anime.theme?.openings" :key="opening.id">{{ opening }}</p>
        </div>
        <div class="w-1/2">
          <h2 class="flex-row text-large font-bold border-b-2 border-gray-300">Ending theme</h2>
          <p v-for="ending in anime.theme?.endings" :key="ending.id">{{ ending }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    anime: {
      required: true
    },
    character: {
      required: true
    }
  }
}
</script>
