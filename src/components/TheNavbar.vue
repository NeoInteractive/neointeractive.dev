<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
let mobileNav = ref(false);
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
    name: "Jobs",
    path: "/jobs",
  },
  {
    name: "Dev Tools",
    path: "/devtools",
  },
];
</script>

<template>
  <nav class="bg-[#01000B] drop-shadow-md fixed top-0 w-screen z-50 py-4">
    <div class="container mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <div>
            <!-- Website Logo -->
            <router-link to="/" class="flex items-center py-4 px-2">
              <img
                src="../assets/logo_long.svg"
                class="h-10"
                alt="Neo Interactive logo"
              />
            </router-link>
          </div>
          <!-- Primary Navbar items -->
          <div class="hidden md:flex items-center space-x-1"></div>
        </div>
        <!-- Secondary Navbar items -->
        <div class="hidden md:flex items-center space-x-3">
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
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button
            @click="mobileNav = !mobileNav"
            class="outline-none mobile-menu-button"
          >
            <svg
              class="w-6 h-6 text-gray-500 hover:text-red-500"
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div class="mobile-menu bg-slate-900" :class="mobileNav ? '' : 'hidden'">
      <div class="flex flex-col pt-8">
        <router-link
          v-for="link in navItems"
          :to="link.path"
          :key="link.name"
          class="ml-8 nav-link mobile"
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
  @apply text-gray-200 tracking-widest text-lg uppercase font-bold hover:text-red-500 transition pl-8;
}
.nav-link.mobile {
  font-family: "Iceland", sans-serif;
  @apply text-gray-200  tracking-widest text-2xl uppercase font-bold hover:text-red-500 transition mb-6 w-full;
}
.nav-link.active {
  @apply text-red-400;
}
</style>
