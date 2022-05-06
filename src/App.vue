<script setup lang="ts">
import TheNavbar from "./components/TheNavbar.vue";
</script>

<template>
  <the-navbar />
  <router-view />
</template>

<style>
#app {
  font-family: "Space Grotesk", sans-serif;
  @apply bg-[#01000B] min-h-screen;
}
</style>
