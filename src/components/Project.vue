<template>
  <a :href="link" class="flex flex-col bg-minimalista-gray-t m-5 p-5 zoom">
    <img :src="image" :alt="alt" class="w-full" />
    <div class="flex flex-col">
      <div class="text-left m-auto w-full">
        <p class="text-xl font-bold">{{ name }}</p>
        <p>{{ description }}</p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "Project",
  props: {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    alt: {
      type: String,
    },
    description: {
      type: String,
    },
    link: {
      type: String,
    },
  },
};
</script>
