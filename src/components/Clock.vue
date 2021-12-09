<script setup lang='ts'>
const props = defineProps<{
	time: Date
}>()

const emit = defineEmits<{
	(event: 'update:time', value: Date): void
}>()

setInterval(() => emit('update:time', new Date()))
</script>

<template>
	<div ref="myClock" class="clock">{{ props.time.toLocaleTimeString() }}</div>
</template>


<style scoped>
.clock {
	padding: 12px;
	border: 1px solid gray;
}
</style>