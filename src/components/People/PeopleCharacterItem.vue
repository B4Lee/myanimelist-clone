<template>
  <!-- IMAGE POSTER & ANIME INFORMATION -->
  <div class="row-span-full w-60 border-[1px] border-gray-200">
    <img :src="posterPath" class="items-center mx-auto" />
    <div class="text-sm mx-1 pt-10">
      <h2 class="text-large font-bold border-b-2 border-black">Information</h2>
      <div class="text-xs">
        <p>{{ item.name }}</p>
        <p class="whitespace-pre-wrap">{{ item.about }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      required: true
    },
    posterPath: {
      required: true
    }
  }
}
</script>
