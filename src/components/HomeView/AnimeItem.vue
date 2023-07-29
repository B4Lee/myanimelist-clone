<template>
  <div id="slider" class="w-full h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth">
    <div class="flex flex-row">
      <div v-for="anime in resultData.slice(0, 10)" :key="anime.mal_id">
        <SkeletonLoader v-if="isLoaded" class="flex justify-center items-center h-60 w-52 mx-2"></SkeletonLoader>
        <div class="w-[210px] relative hover:scale-105 transition duration-100" v-else>
          <router-link :to="`/anime/${anime.mal_id}`">
            <img :src="anime.images.webp.image_url" class="p-2 cursor-pointer" alt="" />
            <div class="absolute bottom-0 w-full mb-0 p-2 opacity-75">
              <h3 class="text-sm whitespace-break-spaces text-center text-white bg-black">
                {{ anime.title }}
              </h3>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useFetchEndpointData } from '../../composable/useFetchEndpointData.vue'
import SkeletonLoader from '../SkeletonLoader.vue'

export default {
  components: {
    SkeletonLoader
  },
  data() {
    return {
      isLoaded: true
    }
  },
  async mounted() {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    this.isLoaded = false
  },
  props: {
    endpoint: String,
    title: String
  },
  setup(props) {
    const { resultData } = useFetchEndpointData(props.endpoint)

    return { resultData }
  }
}
</script>
<!-- <template>
  <div id="slider" class="w-full h-full overflow-x-scroll  overflow-y-hidden whitespace-nowrap scroll-smooth">
    <div class="flex flex-row">
      <div v-for="anime in fetchProps" :key="anime.mal_id">
        <SkeletonLoader v-if="isLoaded" class="flex justify-center items-center h-60 w-52 mx-2"></SkeletonLoader>
        <div class="w-[210px] relative hover:scale-105 transition duration-100 " v-else>
          <router-link :to="`/anime/${anime.mal_id}`">
            <img :src="anime.images.webp.image_url" class=" p-2 cursor-pointer" alt="" />
            <div class="absolute bottom-0 w-full mb-0 p-2 opacity-75">
              <h3 class="text-sm whitespace-break-spaces text-center text-white bg-black">{{ anime.title }}</h3>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkeletonLoader from '../SkeletonLoader.vue'

export default {
  components: {
    SkeletonLoader
  },
  data() {
    return {
      isLoaded: true
    }
  },
  methods: {
    async loadData() {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      this.isLoaded = false
    }
  },
  mounted() {
    this.loadData()
  },
  props: {
    fetchProps: {
      required: true
    },
    // isLoading: {
    //   type: Boolean,
    //   required: true
    // }
  }
}
</script> -->