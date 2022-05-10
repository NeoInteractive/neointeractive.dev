<script setup lang="ts">
import SubpageNav from "../components/SubpageNav.vue";
const team = [
  {
    name: "Marlowe Crawford",
    title: "Co-Founder, Producer, Game Designer",
    imgSlug: "marlowe.png",
  },
  {
    name: "Jovan Kelley-Butler",
    title: "Co-Founder, Gameplay & Quality Assurance Lead",
    imgSlug: "jojo.jpg",
  },
  {
    name: "Eric Kelley",
    title: "Co-Founder, Operations, Web Developer, Community Lead",
    imgSlug: "eric.png",
  },
  {
    name: "Reid Treharne",
    title: "Lead Programmer",
    imgSlug: "reid.png",
  },
  {
    name: "Arianna Chiriff",
    title: "Concept Artist",
    imgSlug: "ari.png",
  },
  {
    name: "Griffin Gallagher",
    title: "Narrative Designer",
    imgSlug: "griff.png",
  },
  {
    name: "Anonymuz",
    title: "Executive Music Producer",
    imgSlug: "anon.jpg",
  },
  {
    name: "DanNaturals",
    title: "Composer",
    imgSlug: "dan.png",
  },
  {
    name: "Nathan Cleary",
    title: "Composer, Sound Designer and Implementation",
    imgSlug: "nathan.png",
  },
  {
    name: "Zack Valentine",
    title: "Character Artist",
    imgSlug: "zach.png",
  },
  {
    name: "Felix Alonso",
    title: "Animator",
    imgSlug: "felix.png",
  },
  {
    name: "Jesse Jones",
    title: "Sound Designer",
    imgSlug: "jesse.jpg",
  },
  {
    name: "FSTR.Tech",
    title: "Support Studio, Environment Art",
    imgSlug: "fstr.jpg",
  },
];
</script>

<template>
  <SubpageNav title="The Team" />
  <main class="container mx-auto px-4 py-24 text-slate-200">
    <h2 class="title small">Who we are</h2>
    <p class="text-2xl content pb-8">
      Neo Interactive is a majority black owned indie development studio founded
      by three friends in 2019. We started as a group of individuals with years
      of experience in corporate tech, that hungered to develop more interactive
      projects. Over the next two years, Neo Interactive established a global
      remote studio working with a diverse group of amazing developers all
      around the world.
    </p>
    <p class="text-2xl content pb-8">
      Since our creative journey began back in 2019, 'Always Forward' has been
      our singular mantra. From the early prototypes to the late night
      development sessions - Always Forward - and always determined to see our
      vision become a reality. Whether it was small steps or great leaps forward
      - our dedication is to create games fitting the vision we hone while
      delivering experiences we know gamers like us will love to play.
    </p>
    <p class="text-2xl content pb-8">
      In late 2021, we were selected to be a
      <strong class="font-bold">
        <a
          href="https://www.humblegames.com/"
          class="hover:underline"
          target="_blank"
          rel="noopener"
        >
          Humble Games
        </a>

        <a
          href="https://blackgame.dev"
          class="hover:underline"
          target="_blank"
          rel="noopener"
        >
          Black Game Developer Fund
        </a>
      </strong>
      grant recipient. This helped us to help continue the development of
      Samurai Zero and push beyond the prototype phase.
    </p>
    <h2 class="title small mt-24 pb-12">Core Team</h2>
    <section class="flex flex-wrap flex-row">
      <div
        v-for="person in team"
        :key="person.name"
        class="lg:w-1/4 md:w-1/2 w-full p-6 mb-16"
      >
        <img
          :src="`https://cdn.neointeractive.dev/web/team/${person.imgSlug}`"
          class="rounded-full w-48 aspect-square"
        />
        <h2 class="text-3xl text-slate-200 pt-6">{{ person.name }}</h2>
        <p class="content">{{ person.title }}</p>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
