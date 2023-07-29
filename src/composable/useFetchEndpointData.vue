<script>
import { ref, onMounted } from 'vue';

export  function useFetchEndpointData(endpoint) {
  const resultData = ref([]);
  const isLoading = ref(true);

  async function fetchData() {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/${endpoint}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      if (responseData && responseData.data) {
        resultData.value = responseData.data;
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  }

  onMounted(fetchData);

  return { resultData, isLoading };
}

</script>