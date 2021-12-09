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
.default-layout {
	border: 1px solid green;
}
header {
	font-size: 20px;
}
</style>
