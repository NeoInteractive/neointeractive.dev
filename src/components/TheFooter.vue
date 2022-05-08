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
  <footer class="p-8 bg-[#01000B] border-t-2 border-[#d14b56]">
    <div class="md:flex md:justify-between">
      <div class="mb-6 md:mb-0">
        <a href="https://flowbite.com" class="flex items-center">
          <img
            src="../assets/logo_long.svg"
            class="h-10"
            alt="Neo Interactive logo"
          />
        </a>
      </div>
      <!-- <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
          >
            Resources
          </h2>
          <ul class="text-gray-600 dark:text-gray-400">
            <li class="mb-4">
              <a href="https://flowbite.com" class="hover:underline"
                >Flowbite</a
              >
            </li>
            <li>
              <a href="https://tailwindcss.com/" class="hover:underline"
                >Tailwind CSS</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
          >
            Follow us
          </h2>
          <ul class="text-gray-600 dark:text-gray-400">
            <li class="mb-4">
              <a
                href="https://twitter.com/neo_interactive"
                class="hover:underline"
                >Twitter</a
              >
            </li>
            <li class="">
              <a
                href="https://store.steampowered.com/developer/neointeractive"
                class="hover:underline"
              >
                Steam
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
          >
            Legal
          </h2>
          <ul class="text-gray-600 dark:text-gray-400">
            <li class="mb-4">
              <a href="#" class="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
      </div> -->
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© {{ new Date().getFullYear() }}
        <a href="https://flowbite.com" class="hover:underline"
          >Neo Interactive LLC</a
        >. All Rights Reserved.
      </span>
      <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        <p class="text-gray-500">Always Forward.</p>
        <a
          href="https://twitter.com/neo_interactive"
          class="text-gray-500 hover:text-white"
          target="_blank"
          rel="noopener"
        >
          <i class="fa-brands fa-twitter-square" />
        </a>
        <a
          href="https://store.steampowered.com/developer/neointeractive"
          class="text-gray-500 hover:text-white"
          target="_blank"
          rel="noopener"
        >
          <i class="fa-brands fa-steam-square" />
        </a>
        <a
          href="https://github.com/neointeractive"
          class="text-gray-500 hover:text-white"
          target="_blank"
          rel="noopener"
        >
          <i class="fa-brands fa-github-square" />
        </a>
        <a
          href="https://www.linkedin.com/company/neointeractive"
          class="text-gray-500 hover:text-white"
          target="_blank"
          rel="noopener"
        >
          <i class="fa-brands fa-linkedin" />
        </a>
      </div>
    </div>
  </footer>
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
