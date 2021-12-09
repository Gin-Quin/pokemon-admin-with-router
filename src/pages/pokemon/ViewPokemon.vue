<script setup lang='ts'>
import { usePokemonsStore } from '@/stores/pokemonsStore';
import { extractNumberFromParam } from '@/utilities/extractNumberFromParam';
import { computed } from '@vue/reactivity';
import { useRoute, useRouter } from 'vue-router';
import PokemonCard from '@/components/PokemonCard.vue';

const pokemonsStore = usePokemonsStore()
const route = useRoute()
const router = useRouter()
const pokemonId = extractNumberFromParam(route.params.id)

if (isNaN(pokemonId)) {
	router.push({ name: "not-found" })
}

const pokemon = pokemonsStore.getPokemonById(pokemonId)
</script>

<template>
	<PokemonCard v-if="pokemon" :pokemon="pokemon" />
	<div v-else>Ce pokemon n'existe pas</div>
</template>
