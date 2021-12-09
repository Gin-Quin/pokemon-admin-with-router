<template>
	<div class="pokemon-layout">
		<header>Pokemon</header>
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
}
</style>