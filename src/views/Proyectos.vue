<template>
  <div class="flex flex-wrap justify-around w-11/12 m-auto">
    <div class="projects absolute">
      <p class="text-xl font-bold">Projects</p>
    </div>
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
<style scoped>
.projects {
  height: 2rem;
  width: 100%;
  top: 100vh;
  text-align: left;
  padding-left: 11rem;
  color: gray;
  background: #f5f5f5;
  backdrop-filter: blur(2px);
}
</style>
