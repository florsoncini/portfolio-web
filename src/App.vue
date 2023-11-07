<template>
  <div id="app">
    <parallax-wrapper class="h-full flex flex-col">
      <!-- <Nav /> -->
      <section class="pt-0">
        <presentacion />
      </section>
      <section class="h-full">
        <proyectos id="projets" />
      </section>
      <!-- <section>
        <contacto id="contact" />
      </section> -->
    </parallax-wrapper>
  </div>
</template>

<script>
import ParallaxWrapper from "./components/ParallaxWrapper.vue";
// import Nav from "./components/Nav.vue";
import Presentacion from "./views/Presentacion.vue";
import Proyectos from "./views/Proyectos.vue";
// import Contacto from "./views/Contacto.vue";

export default {
  components: {
    // Nav,
    ParallaxWrapper,
    Presentacion,
    Proyectos,
    // Contacto,
  },
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
