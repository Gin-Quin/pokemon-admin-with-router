<script setup lang='ts'>
import { usePokemonsStore } from '@/stores/pokemonsStore';
import { extractNumberFromParam } from '@/utilities/extractNumberFromParam';
import { useRoute, useRouter } from 'vue-router';
import PokemonCard from '@/components/PokemonCard.vue';
import InputText from "primevue/inputtext"
import InputNumber from "primevue/inputnumber"
import Card from "primevue/card"
import Button from "primevue/button"
import { Pokemon } from '@/types/Pokemon';
import { computed, reactive, ref } from '@vue/reactivity';


const pokemonsStore = usePokemonsStore()
const route = useRoute()
const router = useRouter()
const pokemonId = extractNumberFromParam(route.params.id)

if (isNaN(pokemonId)) {
	router.push({ name: "not-found" })
}

const index = computed(() => pokemonsStore.pokemons.findIndex(pokemon => pokemon.id == pokemonId))
const storedPokemon = computed(() => pokemonsStore.pokemons[index.value])

const pokemon = ref(storedPokemon.value ? { ...storedPokemon.value } : undefined)

const submitEdits = () => {
	if (!pokemon.value) return
	pokemonsStore.pokemons[index.value] = { ...pokemon.value }
}
</script>

<template>
	<div v-if="!pokemon">Ce pokemon n'existe pas</div>
	<div v-else class="pokemon-edit">
		<form @submit.prevent="submitEdits">
			<Card>
				<template #content>
					<div class="p-fluid p-formgrid">
						<div class="p-field p-col">
							<label for="name">Name</label>
							<InputText id="name" type="text" v-model="pokemon.name" />
						</div>

						<div class="p-field p-col">
							<label for="weight">Weight</label>
							<InputNumber id="weight" v-model="pokemon.weight" />
						</div>

						<div class="p-field p-col">
							<label for="height">Height</label>
							<InputNumber id="height" v-model="pokemon.height" />
						</div>

						<div class="p-field p-col">
							<label for="image">Image</label>
							<InputText id="image" type="text" v-model="pokemon.image" />
						</div>
					</div>

					<div class="submit-button">
						<Button type="submit">Mettre à jour</Button>
					</div>
				</template>
			</Card>
		</form>
		<PokemonCard v-if="storedPokemon" :pokemon="storedPokemon" />
	</div>
</template>

<style scoped>
.pokemon-edit {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 18px;
}
.submit-button {
	margin-top: 12px;
	display: flex;
	justify-content: center;
}
</style>