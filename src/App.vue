<script setup lang="ts">
import TheNavbar from "./components/TheNavbar.vue";
</script>

<template>
  <the-navbar />
  <router-view />
</template>

<style>
#app {
  font-family: "Cabin", sans-serif;
  background: #1a1922;
  min-height: 100vh;
}
</style>
