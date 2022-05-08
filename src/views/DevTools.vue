<script setup lang="ts">
import SubpageNav from "../components/SubpageNav.vue";
</script>

<template>
  <SubpageNav
    title="Dev Tools"
    subtitle="Use our open source dev tools to help with your next game."
  />
  <main class="container mx-auto px-4 py-24 text-slate-50 min-h-screen">
    <h2 class="subtitle">VIZOR Tournament Scoreboard</h2>
    <p class="content text-xl">
      Add a scoreboard to your stream in 2 minutes. VIZOR is a fully dynamic
      scoreboard that offers tournament admins easy-to-use and customizable
      scoreboard overlays, with the ability to control from a Web Browser.
    </p>
    <p class="content text-xl mt-4">
      VIZOR is currently in a semi-released state and is under active
      development.
    </p>
    <p class="pt-12">
      <a
        href="https://usevizor.com"
        target="_blank"
        rel="noopener"
        class="bg-slate-700 text-slate-50 py-3 px-8 font-bold uppercase tracking-wide text-lg mr-4"
      >
        Open VIZOR
      </a>
      <a
        href="https://github.com/NeoInteractive/usevizor"
        target="_blank"
        rel="noopener"
        class="bg-slate-700 text-slate-50 py-3 px-8 font-bold uppercase tracking-wide text-lg"
      >
        <i class="fa-brands fa-github mr-2" />View Source
      </a>
    </p>
  </main>
</template>

<style scoped></style>
