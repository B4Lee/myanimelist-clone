import { defineStore } from 'pinia'
import { reactive } from "vue";

export const useLoadingStore = defineStore('loading', {
  state: () => ({
    loading: false
  }),
  actions: {
    setLoading(status) {
      this.loading = status
    }
  }
})


const state = reactive({
  user: null,
});

const methods = {
  setUser(payload) {
    state.user = payload ? payload.user : null;
  },
};

export default {
  state,
  methods,
};
// import { supabase } from '../lib/supabase';

// export const useAuthStore = defineStore('auth', {
//   state: () => ({
//     isLoggedIn: false,
//   }),

//   actions: {
//     async setLoggedIn(value) {
//       this.isLoggedIn = value;
//     },

//     async login(email, password) {
//       const { user, error } = await supabase.auth.signIn({
//         email,
//         password,
//       });

//       if (error) {
//         console.error('Login failed:', error.message);
//         return false;
//       }

//       await this.setLoggedIn(true);
//       return true;
//     },

//     async signUp(email, password) {
//       const { user, error } = await supabase.auth.signUp({
//         email,
//         password,
//       });

//       if (error) {
//         console.error('Sign up failed:', error.message);
//         return false;
//       }

//       await this.setLoggedIn(true);
//       return true;
//     },

//     async logout() {
//       const { error } = await supabase.auth.signOut();

//       if (error) {
//         console.error('Logout failed:', error.message);
//         return false;
//       }

//       await this.setLoggedIn(false);
//       return true;
//     },

//     async checkAuthStatus() {
//       const session = await supabase.auth.session();

//       if (session) {
//         await this.setLoggedIn(true);
//       } else {
//         await this.setLoggedIn(false);
//       }
//     },
//   },

//   // Call checkAuthStatus on store creation to initialize isLoggedIn
//   onInit() {
//     this.checkAuthStatus();
//   },
// });

