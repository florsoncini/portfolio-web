<template>
  <article class="h-full w-full roboto">
    <div
      class="p-5 gradient h-full w-full flex lg:items-center sm:justify-center"
    >
      <img src="../assets/mask.svg" alt="" />
      <img src="../assets/mask-design.svg" alt="" />
      <div
        class="z-10 base:ml-20 lg:ml-40 text-white flex flex-col justify-around m-5"
      >
        <span class="title lg:mb-10 text-left">Florencia<br />Soncini</span>
        <div class="z-10 card text-left">
          <span class=""
            >Hi there! I'm Florencia, a web developer with a passion for design,
            layout, and administration. I turn creative concepts into functional
            and visually appealing websites.<br /><strong
              >Let's build something great together!</strong
            ></span
          >
        </div>
        <div class="z-10 card lg:absolute lg:top-8 lg:right-8 text-left">
          <span class="">you may also be interested...</span>
          <div class="flex justify-between mb-2">
            <a
              href="https://www.linkedin.com/in/florencia-soncini-904a76204/"
              class="white-card zoom"
              target="_blank"
              ><img class="w-10" src="../assets/linkedin.png" alt=""
            /></a>
            <a href="mailto:florenciasoncini@gmail.com" class="white-card zoom"
              ><img class="w-10" src="../assets/gmail.png" alt=""
            /></a>
            <a
              href="https://github.com/florsoncini"
              class="white-card zoom"
              target="_blank"
              ><img class="w-10" src="" alt=""
            /></a>
          </div>
          <div class="flex justify-between">
            <a
              href="https://www.instagram.com/flor_soncini/"
              class="white-card zoom"
              target="_blank"
              ><img class="w-10" src="../assets/instagram.png" alt=""
            /></a>
            <a
              class="white-card zoom"
              href="https://m.facebook.com/florencia.soncini.39?eav=AfaHtBwZZnRl4WvhIYGFCduIJJDsGcth-3xV9HyUi2ymQsiwamT8V-WDj24wg_TR3YA&paipv=0"
              target="_blank"
              ><img class="w-10" src="../assets/facebook.png" alt=""
            /></a>
            <a
              href="https://twitter.com/FlorSoncini"
              class="white-card zoom"
              target="_blank"
              ><img class="w-10" src="" alt=""
            /></a>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "Me",
};
</script>

<style scoped>
img {
  position: absolute;
  right: 0px;
  bottom: 0px;
}

.text {
  font-size: 5rem;
}

a {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
}
a img {
  position: relative;
}
</style>
