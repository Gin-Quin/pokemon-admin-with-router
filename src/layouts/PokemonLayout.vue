<template>
	<div class="pokemon-layout">
		<header>POKEMON</header>
		<main>
			<router-view />
		</main>
	</div>
</template>

<style scoped>
.pokemon-layout {
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding: 12px;
	border: 1px solid red;
}
</style>