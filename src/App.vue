<script setup lang="ts">
import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <the-navbar />
  <router-view />
  <the-footer />
</template>

<style lang="scss">
#app {
  font-family: "Space Grotesk", sans-serif;
  @apply bg-[#01000B] min-h-screen;
}

html {
  ::-webkit-scrollbar {
    height: 10px;
    width: 10px;
    background-color: red;
  }
  ::-webkit-scrollbar-corner {
    background: #363638;
  }
  ::-webkit-scrollbar-thumb {
    background: #606060;
    border: 1px solid #393939;
    cursor: select;
  }
  ::-webkit-scrollbar-track {
    border: 1px solid #01000b;
    background-color: #01000b;
  }
}
</style>
