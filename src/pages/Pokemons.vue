<script setup lang='ts'>
import { Pokemon } from '@/types/Pokemon';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from "primevue/button"
import { useRouter } from 'vue-router';
import { reactive } from '@vue/reactivity';

const router = useRouter()

const pokemons: Pokemon[] = reactive([
	{
		id: 1,
		name: "Foo",
		height: 123,
		weight: 12,
		image: ""
	},
	{
		id: 2,
		name: "Bar",
		height: 9872,
		weight: 23,
		image: ""
	},
])

const viewPokemon = (pokemon: Pokemon) => {
	router.push({ name: 'pokemon-view', params: { id: pokemon.id } })
}
const editPokemon = (pokemon: Pokemon) => {
	router.push({ name: 'pokemon-edit', params: { id: pokemon.id } })
}
const deletePokemon = (pokemon: Pokemon) => {
	const index = pokemons.findIndex(element => element.id == pokemon.id)
	if (index >= 0) pokemons.splice(index, 1)
}
</script>

<template>
	<DataTable :value="pokemons">
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