<template>
  <div v-if="loading" class="overlay">
    <div class="loader"></div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useLoadingStore } from '../store';

export default {
  setup() {
    const loadingStore = useLoadingStore();
    const loading = computed(() => loadingStore.loading);

    return { loading };
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99999;
}
.loader {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 60px;
  height: 60px;
  margin: -76px 0 0 -76px;
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #3498db;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>