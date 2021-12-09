import { Pokemon } from "@/types/Pokemon";
import { defineStore } from "pinia";

const defaultPokemons: Pokemon[] = [
  {
    id: 1,
    name: "Foo",
    height: 123,
    weight: 12,
    image: "",
  },
  {
    id: 2,
    name: "Bar",
    height: 9872,
    weight: 23,
    image: "",
  },
];

export const usePokemonsStore = defineStore({
  id: "pokemons",

  // on initialise le state grâce à une fonction
  // qui retourne un objet
  state: () => ({
    pokemons: defaultPokemons,
  }),

  // les getters sont des éléments dérivés du state
  // c'est l'équivalent du "computed" de vue 3
  getters: {
    pokemounsCount: (state) => state.pokemons.length,
  },

  actions: {
    // il ne faut pas utiliser une fonction fléchée
    // sinon "this" n'est pas défini
    getPokemonById(id: number): Pokemon | undefined {
      return this.pokemons.find((pokemon) => pokemon.id == id);
    },
    deletePokemon(id: number) {
      const index = this.pokemons.findIndex((element) => element.id == id);
      if (index >= 0) this.pokemons.splice(index, 1);
    },
  },
});
