<script setup>
import Navbar from './components/Header/NavBar.vue'
import Footer from './components/Footer/FooterBot.vue'

import { ref } from "vue";
import { supabase } from "./store/supabase";
import store from "./store";

// Create data / vars
const appReady = ref(null);

// Check to see if the user is already logged in
const user = supabase.auth.user;

// If the user does not exist, set the app ready
if (!user) {
	appReady.value = true;
}

// Runs when there is an auth state change
// if the user is logged in, this will fire
// The `supabase.auth.onAuthStateChange` function is used to listen for changes in the authentication
// state of the user. It takes a callback function as an argument, which will be executed whenever the
// authentication state changes.
supabase.auth.onAuthStateChange((_, session) => {
	store.methods.setUser(session);
	appReady.value = true;
});
</script>
<template>
	<div v-if="appReady">
		<Navbar />
		<global-loading></global-loading>
		<router-view />
		<Footer />
	</div>
</template>