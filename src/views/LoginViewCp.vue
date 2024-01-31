<template>
<div class="max-w-4xl mx-auto border-2 border-black">
	<div class="flex flex-col">
		<label for="email"> Email: </label>
		<input class="border-2 border-gray-500 border-solid" type="email" id="email" v-model="email">
	</div>

	<div class="flex flex-col">
		<label for="email"> Password: </label>
		<input type="password" id="password" v-model="password">
	</div>

	<div class="flex flex-col">
		<label for="firstName"> First Name </label>
		<input type="firstName" id="firstName" v-model="firstName">
	</div>

	<div class="buttonContainer">
		<button @click="createAccount"> Create </button>
		<button @click="login"> Login </button>
		<button @click="seeUser"> See user </button>
		<button @click="logout"> Logout </button>
	</div>
</div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../store/supabase"

let email = ref("");
let password = ref("");
let firstName = ref("");

async function createAccount() {
	const { user, error } = await supabase.auth.signUp({
		email: email.value,
		password: password.value,
		options: {
			data: {
				first_name: firstName.value
			}
		}
	})
	if (error)
	{
		console.log(error);
	}
	else
	{
		console.log(user);
	}
}

async function login() {
	console.log("run")
	const { data, error } = await supabase.auth.signInWithPassword({
		email: email.value,
		password: password.value
	})
	if (error)
	{
		console.log(error);
	}
	else
	{
		console.log(data);
	}
}

async function seeUser() {
	const localUser = await supabase.auth.getSession();
	console.log(localUser.data.session)
}

async function logout() {
	const { error } = await supabase.auth.signOut();

	if (error) {
		console.log(error);
	}
	else {
		console.log("Sign out success")
	}
}
</script>

<style scoped>
.inputContainer {
	display: flex;
	flex-direction: column;
}

input {
	font-size: 1.5em;
}
.buttonContainer {
	display: flex;
	flex-direction: column;
	margin-top: 1em;
}

button {
	margin-bottom: 1em;
	padding: 1em 2em 1em 2em;
}
</style>