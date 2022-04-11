<template>
  <div class="bg" :style="position">
    <slot />
  </div>
</template>
<script>
export default {
  name: "ParallaxWrapper",
  data() {
    return {
      x: "",
      y: "",
    };
  },
  computed: {
    position() {
      return { backgroundPosition: `${this.x} ${this.y}` };
    },
  },
  mounted() {
    window.addEventListener("mousemove", this.handleMouseMove);
  },
  beforeDestroy() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  },
  methods: {
    handleMouseMove(event) {
      const { clientX, clientY } = event;
      const { width, height } = this.$el.getBoundingClientRect();
      const x = (clientX - width * 0.5) / width;
      const y = (clientY - height * 0.5) / height;
      this.x = `${x * -10}px`;
      this.y = `${y * -10}px`;
    },
  },
};
</script>
