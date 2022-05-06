<template>
  <header class="hero-parent-container">
    <div class="hero-content-container">
      <div class="hero-content">
        <h1 class="hero-title">
          We make creative, ambitious, and genre-blending games.
        </h1>
        <h2 class="hero-subtitle">
          Neo Interactive is a video game development studio based out of
          Detroit with a global team of amazing artists and developers working
          hard on Samurai Zero.
        </h2>
        <div class="hero-cta">
          <router-link to="/games" class="hero-btn">
            View our Games
          </router-link>
          <router-link to="/team" class="hero-btn"> The Team </router-link>
        </div>
      </div>
    </div>
    <video
      autoplay
      loop
      muted
      class="hero-video"
      poster="https://cdn.neointeractive.dev/poster.jpg"
    >
      <source
        src="https://cdn.neointeractive.dev/video/ni_hero.mp4"
        type="video/mp4"
      />
    </video>
  </header>
</template>

<style scoped>
.hero-parent-container {
  @apply relative flex items-center justify-center h-screen w-full overflow-hidden;
}
.hero-content-container {
  @apply relative z-30 w-full h-full text-2xl text-white bg-[#01000B] bg-opacity-90 backdrop-blur-md;
}
.hero-content {
  @apply container mx-auto flex flex-col justify-center h-full  p-8 py-80;
}
.hero-title {
  font-family: "Iceland", sans-serif;
  @apply font-extrabold tracking-widest text-transparent text-7xl bg-clip-text bg-gradient-to-br from-[#d14b56] to-[#FF2C3C] max-w-[80rem] uppercase;
}
.hero-subtitle {
  font-family: "Space Grotesk", sans-serif;
  @apply text-3xl text-gray-100 pt-6 pb-10 max-w-[55rem];
}
.hero-cta {
  @apply flex flex-row;
}
.hero-btn {
  font-family: "Iceland", sans-serif;
  @apply px-6 py-1 bg-slate-700 text-gray-200 text-lg uppercase font-bold rounded hover:bg-slate-800 hover:text-gray-100 transition mr-2;
}
.hero-video {
  @apply absolute z-10 aspect-video w-full;
}
</style>
