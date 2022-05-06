<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
let navItems = [
  {
    name: "Our Games",
    path: "/games",
  },
  {
    name: "The Team",
    path: "/team",
  },
  {
    name: "Press",
    path: "/press",
  },
  {
    name: "Dev Tools",
    path: "/devtools",
  },
  {
    name: "Jobs",
    path: "/jobs",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
</script>

<template>
  <nav class="bg-[#01000B] drop-shadow-md fixed top-0 w-screen z-50 py-4">
    <div class="container mx-auto flex flex-row justify-between py-3">
      <router-link to="/">
        <img
          src="../assets/logo_long.svg"
          class="h-10"
          alt="Neo Interactive logo"
        />
      </router-link>
      <div class="text-white flex flex-row justify-between items-center">
        <router-link
          v-for="link in navItems"
          :to="link.path"
          :key="link.name"
          class="ml-8 nav-link"
          :class="{ active: link.path === route.path }"
        >
          {{ link.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.nav-link {
  font-family: "Iceland", sans-serif;
  @apply text-gray-200 tracking-widest text-lg uppercase font-bold hover:text-red-500 transition;
}
.nav-link.active {
  @apply text-red-400;
}
</style>
