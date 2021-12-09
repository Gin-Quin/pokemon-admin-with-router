<script setup lang='ts'>
import { Pokemon } from '@/types/Pokemon';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from "primevue/button"
import { useRouter } from 'vue-router';
import { usePokemonsStore } from '@/stores/pokemonsStore';

const router = useRouter()
const pokemonsStore = usePokemonsStore()

const viewPokemon = (pokemon: Pokemon) => {
	router.push({ name: 'pokemon-view', params: { id: pokemon.id } })
}
const editPokemon = (pokemon: Pokemon) => {
	router.push({ name: 'pokemon-edit', params: { id: pokemon.id } })
}
const deletePokemon = (pokemon: Pokemon) => {
	pokemonsStore.deletePokemon(pokemon.id)
}
</script>

<template>
	<DataTable :value="pokemonsStore.pokemons">
		<Column field="id" header="id" />
		<Column field="name" header="name" />
		<Column field="height" header="height" />
		<Column field="weight" header="weight" />
		<Column field="image" header="image" />

		<Column header="actions">
			<template #body="{ data }">
				<div class="actions">
					<Button @click="viewPokemon(data)" class="p-button-rounded" icon="pi pi-eye"></Button>
					<Button @click="editPokemon(data)" class="p-button-rounded" icon="pi pi-pencil"></Button>
					<Button @click="deletePokemon(data)" class="p-button-rounded" icon="pi pi-times"></Button>
				</div>
			</template>
		</Column>
	</DataTable>
</template>

<style scoped>
.actions {
	display: flex;
	gap: 6px;
}
</style>