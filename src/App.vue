<template>
  <div id="app">
    <parallax-wrapper class="h-full flex flex-col">
      <Nav />
      <section>
        <home />
      </section>
      <section class="h-full">
        <projects />
      </section>
    </parallax-wrapper>
  </div>
</template>

<script>
import ParallaxWrapper from "./components/ParallaxWrapper.vue";
import Nav from "./components/Nav.vue";
import Home from "./views/Home.vue";
import Projects from "./views/Projects.vue";

export default {
  components: { Nav, ParallaxWrapper, Home, Projects },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #353535;
}

section {
  height: 100vh;
  padding-top: 5rem;
}
</style>
