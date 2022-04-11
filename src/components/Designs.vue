<template>
  <div class="flex">
    <button>
      <!-- <span class="green"> </span> -->
      <span class="gradient"></span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Designs",
};
</script>

<style lang="postcss" scoped>
span {
  padding: 10px;
  border-radius: 100%;
}
.green {
  background: #f6f5f8;
  border: 1px solid #000;
}
.gradient {
  background: linear-gradient(#dd94e3, #aaf1ff);
}
</style>
