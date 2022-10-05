<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import ProjectCard from "./ProjectCard.vue";
const router = useRouter();
function navigate(name) {
  router.push({
    name,
  });
}
const props = defineProps({
  projects: [],
});
</script>
<template>
  <div class="project-list-container">
    <div v-for="project in props.projects" :key="project.title">
      <project-card
        :title="project.title"
        :category="project.category"
        :date="project.date"
        :image-path="project.imagePath"
        @navigate="navigate(project.name)"
      />
    </div>
  </div>
</template>

<style>
.project-list-container {
  margin-left: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
