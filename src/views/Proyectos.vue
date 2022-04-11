<template>
  <div class="flex flex-wrap justify-around w-11/12 m-auto">
    <project
      v-for="project in projects"
      :key="project.name"
      v-bind="project"
    ></project>
  </div>
</template>

<script>
import projects from "@/info/projects.json";
import Project from "@/components/Project.vue";
export default {
  name: "Projects",
  components: {
    Project,
  },
  data() {
    return {
      projects,
    };
  },
};
</script>
