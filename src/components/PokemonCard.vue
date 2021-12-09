<script setup lang="ts">
import { Pokemon } from '@/types/Pokemon';

const props = defineProps<{
	pokemon: Pokemon
}>()
</script>

<template>
	<div class="pokemon">
		<img :src="props.pokemon.image" width="96" height="96" />
		<div class="name">{{ props.pokemon.name }}</div>
		<div class="weight">Poids: {{ props.pokemon.weight }} kg</div>
		<div class="height">Taille : {{ props.pokemon.height }} cm</div>
	</div>
</template>

<style scoped>
img {
	margin: 0;
}

.pokemon {
	width: 200px;
	height: 240px;
	border-radius: 9px;
	box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
	padding: 9px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4px;
}

.name {
	font-weight: bold;
}
</style>