import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../pages/About.vue"),
    },
    {
      path: "/pokemon",
      component: () => import("../pages/PokemonLayout.vue"),
      children: [
        {
          path: "/create",
          name: "pokemon-new",
          component: () => import("../pages/NewPokemon.vue"),
        },
        {
          path: "/edit/:id",
          name: "pokemon-edit",
          component: () => import("../pages/EditPokemon.vue"),
        },
        {
          path: "/view/:id",
          name: "pokemon",
          component: () => import("../pages/Pokemon.vue"),
        },
      ],
    },
  ],
});

export default router;
