<template>
  <section class="bg-topo-red py-24">
    <div class="container mx-auto px-4">
      <h1 class="title pt-24">
        {{ props.title }}
      </h1>
      <h2 v-if="props.subtitle" class="subtitle pt-24 pb-6">
        {{ props.subtitle }}
      </h2>
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: String,
});
</script>

<style lang="scss" scoped></style>
