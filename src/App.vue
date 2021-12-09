<script setup lang="ts">
import DefaultLayout from './layouts/DefaultLayout.vue';
import "./global.css"
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
  <DefaultLayout v-if="route.meta.layout !== false">
    <router-view />
  </DefaultLayout>

  <router-view v-else />
</template>
