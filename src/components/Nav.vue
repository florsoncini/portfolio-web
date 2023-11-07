<template>
  <nav class="px-10 bg-blur fixed top-0 z-20" id="nav">
    <!-- <img
      class="absolute left-2 flex self-center"
      alt="logo"
      src="../assets/fs.png"
    /> -->
    <div class="flex items-center">
      <p class="text-2xl cursive name font-bold">Florencia Soncini</p>
    </div>
    <div class="w-1/2 flex items-center justify-between">
      <a href="/">About me</a>
      <a href="#projets">Projects</a>
      <a href="#contact">Contact</a>
      <!-- <designs /> -->
    </div>
  </nav>
</template>

<script>
// import Designs from "./Designs.vue";

export default {
  name: "Nav",
  // components: { Designs },
};
</script>

<style lang="postcss" scoped>
nav {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100vw;
  height: 2rem;
  justify-content: space-between;
}

nav a {
  font-weight: bold;
  color: #626262;
  width: 100%;
}

nav div {
  height: 100%;
}

nav img {
  width: 4rem;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.name {
  color: rgba(255, 255, 255, 0.11);
}
</style>
