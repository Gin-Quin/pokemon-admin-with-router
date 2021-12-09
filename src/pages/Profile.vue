<script setup lang='ts'>
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';
import Button from "primevue/button"

const userStore = useUserStore()
const router = useRouter()

const logOut = () => {
	userStore.logOut()
	router.push({ name: "login" })
}
</script>

<template>
	<p>Vous êtes actuellement connecté.</p>
	<Button @click="logOut">Log out</Button>
</template>