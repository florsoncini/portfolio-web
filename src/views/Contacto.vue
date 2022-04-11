<template>
  <div class="flex flex-wrap justify-around w-11/12 m-auto">
    <a
      v-for="profile in myProfiles"
      :key="profile.icon"
      :href="profile.link"
      class="flex flex-col bg-minimalista-gray-t m-5 p-5 zoom"
    >
      <fa-icon :icon="[profile.type, profile.icon]" class="text-black" />
    </a>
  </div>
</template>

<script>
import myProfiles from "@/info/myProfiles.json";
export default {
  name: "Contacto",
  data() {
    return {
      myProfiles,
    };
  },
};
</script>
