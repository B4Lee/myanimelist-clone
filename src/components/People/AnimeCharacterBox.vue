<template>
  <div class="col-span-12 mx-2">
    <h3 class="text-large font-bold border-b-2 border-black">Voice Acting Roles</h3>
    <div
      class="flex justify-between border-[1px] border-gray-200"
      :key="index"
      v-for="(anime, index) in item.voices"
    >
      <div class="flex text-xs">
        <img
          class="mr-1 inline-block w-[50px] h-[80px]"
          :src="anime.anime.images.jpg.image_url"
          alt=""
        />
        <router-link :to="`/anime/${anime.anime.mal_id}/`">
          <p>{{ anime.anime.title }}</p>
        </router-link>
      </div>
      <div class="flex flex-row-reverse">
        <img
          class="ml-1 inline-block w-[50px] h-[80px]"
          :src="anime.character.images.jpg.image_url"
          alt=""
        />
        <p class="text-xs">{{ anime.character.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      required: true
      // default: () => []
    }
  }
}
</script>
