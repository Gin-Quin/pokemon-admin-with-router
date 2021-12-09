<script setup lang='ts'>
import NavigationBar from '@/components/NavigationBar.vue';
import { ref } from '@vue/reactivity';

// une valeur réactive pour mettre à jour automatiquement le css
const padding = ref(20);
</script>

<template>
	<div class="default-layout" :style="{ padding: `${padding}px` }">
		<header>
			<NavigationBar />
		</header>
		<main>
			<router-view />
		</main>
	</div>
</template>

<style scoped>
main {
	/* on applique un margin vertical de 32px */
	/* et un margin horizontal de 9px */
	margin: 32px 9px;
}
</style>
