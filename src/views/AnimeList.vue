<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted, computed } from 'vue'

const query = ref('')
const my_anime = ref([])
const search_results = ref([])

// computed: {
//   animeAsc(() => {
//     return my_anime.value.sort((a, b) => {
// 		return a.title.localeCompare(b.title)
// 	})
// },

const my_anime_asc = computed(() => {
	// eslint-disable-next-line vue/no-side-effects-in-computed-properties
	return my_anime.value.sort((a, b) => {
		return a.title.localeCompare(b.title)
	})
})

const searchAnime = () => {
	const url = `https://api.jikan.moe/v4/anime?q=${query.value}`
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			search_results.value = data.data
		})
}

const handleInput = (e) => {
	if (!e.target.value) {
		search_results.value = []
	}
}

const addAnime = (anime) => {
	search_results.value = []
	query.value = ''

	my_anime.value.push({
		id: anime.mal_id,
		title: anime.title,
		image: anime.images.jpg.image_url,
		total_episodes: anime.episodes,
		watched_episodes: 0
	})

	localStorage.setItem('my_anime', JSON.stringify(my_anime.value))
}

const increaseWatch = (anime) => {
	anime.watched_episodes++
	localStorage.setItem('my_anime', JSON.stringify(my_anime.value))
}

const decreaseWatch = (anime) => {
	anime.watched_episodes--
	localStorage.setItem('my_anime', JSON.stringify(my_anime.value))
}

const removeAnime = (anime) => {
  const filtered = (my_anime.value = my_anime.value.filter((t) => t !== anime));
  localStorage.setItem("my_anime", JSON.stringify(filtered));
};

onMounted(() => {
	my_anime.value = JSON.parse(localStorage.getItem('my_anime')) || []
})
</script>

<template>
	<main>
		<!-- <h1>My Anime Tracker</h1> -->

		<form @submit.prevent="searchAnime">
			<input type="text" placeholder="Search for an anime..." v-model="query" @input="handleInput" />
			<button type="submit" class="button bg-[#2e51a2]">Search</button>
		</form>

		<div class="results" v-if="search_results.length > 0">
			<div v-for="anime in search_results" :key="anime.id" class="result">
				<router-link :to="`/anime/${anime.mal_id}/`">
					<img :src="anime.images.jpg.image_url" />
					<h3>{{ anime.title }}</h3>
				</router-link>
				<div class="details">
					<p :title="anime.synopsis" v-if="anime.synopsis">{{ anime.synopsis.slice(0, 120) }}...</p>
					<span class="flex-1"></span>
					<button @click="addAnime(anime)" class="button">Add to My Anime</button>
				</div>
			</div>
		</div>

		<div class="myanime" v-if="my_anime.length > 0">
			<h2>My Anime</h2>
			<div v-for="anime in my_anime_asc" :key="anime.id" class="anime">
				<img :src="anime.image" />
				<router-link :to="`/anime/${anime.id}/`">
				<h3>{{ anime.title }}</h3>
				</router-link>
				<div class="flex-1"></div>
				<span class="episodes">{{ anime.watched_episodes }} / {{ anime.total_episodes }}</span>
				<button v-if="anime.watched_episodes > 0" @click="decreaseWatch(anime)" class="button">
					-
				</button>
				<button v-if="anime.total_episodes !== anime.watched_episodes" @click="increaseWatch(anime)" class="button">
					+
				</button>
				<button class="deleteButton" @click="removeAnime(anime)">
					❌
				</button>
			</div>
		</div>
	</main>
</template>

<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira Sans', sans-serif;
}

body {
	background-color: #EEE;
}

main {
	margin: 0 auto;
	max-width: 768px;
	padding: 1.5rem;
}

h1 {
	text-align: center;
	margin-bottom: 1.5rem;
}

form {
	display: flex;
	max-width: 480px;
	margin: 0 auto 1.5rem;
}

form input {
	appearance: none;
	outline: none;
	border: none;
	background: white;

	display: block;
	color: #888;
	font-size: 1.125rem;
	padding: 0.5rem 1rem;
	width: 100%;
}

.deleteButton {
	cursor: pointer;
	display: block;
	outline: none;
	border: none;
	border-radius: 50%;
	padding: 0.75rem 0.75rem;
	background-image: linear-gradient(to right, #2e51a2 50%, #2e51a2 50%);
	background-size: 200%;
	position: relative;
	bottom: 2rem;
	left: 2rem;
}

.button {
	appearance: none;
	outline: none;
	border: none;
	background: none;
	cursor: pointer;

	display: block;
	padding: 0.5rem 1rem;
	background-image: linear-gradient(to right, #2e51a2 50%, #2e51a2 50%);
	background-size: 200%;
	color: white;
	font-size: 1.125rem;
	font-weight: bold;
	text-transform: uppercase;
	transition: 0.4s;
}

.button:hover {
	background-position: right;
}

.results {
	background-color: #fff;
	border-radius: 0.5rem;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	max-height: 480px;
	overflow-y: scroll;
	margin-bottom: 1.5rem;
}

.result {
	display: flex;
	margin: 1rem;
	padding: 1rem;
	border: 1px solid #ccc;
	border-radius: 5px;
	transition: 0.4s;
}

.result img {
	width: 100px;
	border-radius: 1rem;
	margin-right: 1rem;
}

.details {
	flex: 1 1 0%;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
}

.details h3 {
	font-size: 1.25rem;
	margin-bottom: 0.5rem;
}

.details p {
	font-size: 0.875rem;
	margin-bottom: 1rem;
}

.details .button {
	margin-left: auto;
}

.flex-1 {
	display: block;
	flex: 1 1 0%;
}

.myanime h2 {
	color: #888;
	font-weight: 400;
	margin-bottom: 1.5rem;
}

.myanime .anime {
	display: flex;
	align-items: center;
	margin-bottom: 1.5rem;
	background-color: #FFF;
	padding: 1rem;
	border-radius: 0.5rem;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.anime img {
	width: 72px;
	height: 72px;
	object-fit: cover;
	border-radius: 1rem;
	margin-right: 1rem;
}

.anime h3 {
	color: #888;
	font-size: 1.125rem;
}

.anime .episodes {
	margin-right: 1rem;
	color: #888;
}

.anime .button:first-of-type {
	margin-right: 0.5rem;
}

.anime .button:last-of-type {
	margin-right: 0;
}

</style>