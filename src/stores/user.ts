import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",

  state: () => ({
    loggedIn: false,
  }),

  actions: {
    logIn() {
      this.loggedIn = true;
    },
    logOut() {
      this.loggedIn = false;
    },
  },
});
