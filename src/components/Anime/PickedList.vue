<template>
  <div>
    <p class="font-bold">
      {{ title }}:<span
        class="font-normal whitespace-nowrap inline-block"
        v-for="(item, index) in items"
        :key="index"
        >{{ item.name }}<span v-if="items.length - 1 != index">,</span></span>
        <!-- <br /> -->
        <!-- <a :href="item.url">{{ item.url }}</a> -->
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      required: true
    }
  }
}
</script>
