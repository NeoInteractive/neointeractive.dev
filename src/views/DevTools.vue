<script setup lang="ts">
import SubpageNav from "../components/SubpageNav.vue";
</script>

<template>
  <SubpageNav title="Dev Tools" />
  <main class="container mx-auto px-4 py-24 text-slate-50">
    <h2 class="subtitle">VIZOR Tournament Scoreboard</h2>
    <p class="content text-xl">
      Add a scoreboard to your stream in 2 minutes. VIZOR is a fully dynamic
      scoreboard that offers tournament admins easy-to-use and customizable
      scoreboard overlays, with the ability to control from a Web Browser. VIZOR
      is currently in Beta and is
      <a href="https://github.com/NeoInteractive/usevizor">Open Source</a>
    </p>
    <p class="pt-12">
      <a
        href="https://usevizor.com"
        target="_blank"
        rel="noopener"
        class="bg-gradient-to-br from-[#d14b56] to-[#FF2C3C] text-slate-50 py-3 px-8 font-bold uppercase tracking-wide text-lg"
      >
        Open VIZOR
      </a>
    </p>
  </main>
</template>

<style scoped></style>
