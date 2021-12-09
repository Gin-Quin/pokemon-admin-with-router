<script setup lang='ts'>
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';
import Button from "primevue/button"

const router = useRouter()
const userStore = useUserStore()

const logIn = () => {
	userStore.logIn()
	router.push({ name: "home" })
}
</script>

<template>
	<Button @click="logIn">Log in</Button>
</template>