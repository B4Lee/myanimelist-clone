<script setup>
import Navbar from './components/Header/NavBar.vue'
import Footer from './components/Footer/FooterBot.vue'
</script>
<template>
	<Navbar />
	<global-loading></global-loading>
	<router-view />
	<Footer />
</template>