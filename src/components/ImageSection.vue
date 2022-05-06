<script setup lang="ts">
defineProps({
  isrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "Default Title",
  },
  subtitle: {
    type: String,
    default: "Default Subtitle",
  },
});
</script>
<template>
  <section
    class="image-section-container"
    :style="[
      isrc
        ? { background: 'url(' + isrc + ') center no-repeat' }
        : { background: '#1a1922' },
    ]"
  >
    <h1 class="section-title">
      {{ title }}
    </h1>
    <h2 class="section-subtitle">
      {{ subtitle }}
    </h2>
  </section>
</template>

<style scoped>
.image-section-container {
  @apply container mx-auto flex flex-col h-full  p-8 py-36;
}

.section-title {
  font-family: "Iceland", sans-serif;
  @apply font-extrabold tracking-widest text-transparent text-7xl bg-clip-text bg-gradient-to-br from-[#d14b56] to-[#FF2C3C] max-w-[80rem] uppercase;
}
.section-subtitle {
  font-family: "Space Grotesk", sans-serif;
  @apply text-3xl text-gray-100 pt-6 pb-10 max-w-[55rem];
}
</style>
