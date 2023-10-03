<template>
    <!-- SLOT: POSTER & IMAGE -->
    <div class="row-span-full col-span-1 mr-3 ml-3 border-r-2">
      <slot name="poster"></slot>
    </div>

    <!-- SLOT: CONTENT -->                                          
    <div class="col-span-3 pt-12">
      <slot name="content"></slot>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>