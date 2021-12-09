<script setup lang='ts'>
import { Pokemon } from '@/types/Pokemon';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const pokemons: Pokemon[] = [
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
]
</script>

<template>
	<DataTable :value="pokemons">
		<Column field="id" header="id" />
		<Column field="name" header="name" />
		<Column field="height" header="height" />
		<Column field="weight" header="weight" />
		<Column field="image" header="image" />
	</DataTable>
</template>