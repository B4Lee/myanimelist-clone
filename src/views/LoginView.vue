<template>
	<div class="max-w-xl mx-auto border-8 border-solid my-14 py-14 border-[#e1e7f5]">
		<!-- Error Handling -->
		<div v-if="errorMsg" class="mb-10 p-4 rounded-md bg-light-grey shadow-lg">
			<p class="text-red-500">{{ errorMsg }}</p>
		</div>
		<div class="max-w-md mx-auto my-4">
			<div class="username flex flex-col">
				<label>Email</label>
				<input class="border-2 border-solid border-gray-400 h-10" type="email" v-model="email">
			</div>
			<div class="password flex flex-col">
				<label for="password"> Password</label>
				<input  class="border-2 border-solid border-gray-400 h-10" type="password" v-model="password">
			</div>

			<button class="flex justify-center py-2 my-4 mt-10 mx-auto bg-[#4065ba] border-2 text-white cursor-pointer font-bold min-w-40 text-center" @click="login">
				Login
			</button>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../store/supabase"
import { useRouter } from "vue-router"

let email = ref("");
let password = ref("");
    // Setup ref to router
const router = useRouter();
const errorMsg = ref(null);

// let firstName = ref("");

async function login() {
	console.log("run")
	const { data, error } = await supabase.auth.signInWithPassword({
		email: email.value,
		password: password.value
		
	})
	if (error)
	{
		errorMsg.value = `Error: ${error.message}`;
        setTimeout(() => {
          errorMsg.value = null;
        }, 3000);
	}
	else
	{
		console.log(data);
		router.push('/anime-list');
	}
}

// async function createAccount() {
// 	const { user, error } = await supabase.auth.signUp({
// 		email: email.value,
// 		password: password.value,
// 		options: {
// 			data: {
// 				first_name: firstName.value
// 			}
// 		}
// 	})
// 	if (error)
// 	{
// 		console.log(error);
// 	}
// 	else
// 	{
// 		console.log(user);
// 	}
// }
// async function seeUser() {
// 	const localUser = await supabase.auth.getSession();
// 	console.log(localUser.data.session)
// }

// async function logout() {
// 	const { error } = await supabase.auth.signOut();

// 	if (error) {
// 		console.log(error);
// 	}
// 	else {
// 		console.log("Sign out success")
// 	}
// }
</script>