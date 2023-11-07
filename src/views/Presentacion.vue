<template>
  <div class="w-full h-full">
    <about-me class="w-1/2" />
  </div>
</template>

<script>
import AboutMe from "../components/AboutMe.vue";

export default {
  name: "Home",
  components: {
    AboutMe,
  },
};
</script>
