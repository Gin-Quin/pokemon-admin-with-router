import { useUserStore } from "@/stores/user";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../pages/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../pages/About.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../pages/Login.vue"),
      meta: {
        public: true,
        layout: false,
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../pages/Profile.vue"),
    },
    {
      path: "/pokemons",
      name: "pokemons",
      component: () => import("../pages/pokemons.vue"),
    },
    {
      path: "/pokemons",
      component: () => import("../layouts/PokemonLayout.vue"),
      children: [
        {
          path: "create",
          name: "pokemon-new",
          component: () => import("../pages/pokemon/NewPokemon.vue"),
        },
        {
          path: "edit/:id",
          name: "pokemon-edit",
          component: () => import("../pages/pokemon/EditPokemon.vue"),
        },
        {
          path: "view/:id",
          name: "pokemon-view",
          component: () => import("../pages/pokemon/ViewPokemon.vue"),
        },
      ],
    },

    // si le path ne matche aucune route, on affiche le component NotFound
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../pages/NotFound.vue"),
      meta: {
        layout: false,
        public: true,
      },
    },
  ],
});

router.beforeEach((route) => {
  const userStore = useUserStore();
  if (!route.meta.public) {
    if (!userStore.loggedIn) {
      router.push({ name: "login" });
    }
  }
});

export default router;
