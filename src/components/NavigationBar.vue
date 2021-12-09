<script setup lang="ts">
import Menubar from "primevue/Menubar"

const items = [
	{ to: 'home', label: "Home" },
	{ to: 'about', label: "About" },
]
</script>

<template>
	<Menubar :model="items" />
</template>
