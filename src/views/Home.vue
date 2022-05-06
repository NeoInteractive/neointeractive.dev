<script setup lang="ts">
import VideoHero from "../components/VideoHero.vue";
</script>

<template>
  <video-hero />
</template>

<style scoped>
.image-section-container {
  @apply container mx-auto flex flex-col h-full  p-8 py-36;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background: linear-gradient(to bottom, rgb(0, 1, 8), rgba(0, 0, 27, 0.73)),
    url("https://cdn.neointeractive.dev/poster.jpg");
}
</style>
