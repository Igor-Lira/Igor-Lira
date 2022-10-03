<script setup>
import { useRouter } from "vue-router";
import ProjectCard from "./ProjectCard.vue";
const router = useRouter();
function navigate(name) {
  router.push({
    name,
  });
}
const projects = [
  {
    title: "POST YOUR IDEAS",
    category: "FULL-STACK WEB",
    date: "2022",
    imagePath: "./post-your-ideas-banner.jpg",
  },
  {
    title: "FIND YOUR DUO",
    category: "FULL-STACK WEB",
    date: "2022",
    imagePath: "./find-your-duo-banner.png",
  },
  {
    title: "MARVEL WORLD",
    category: "FRONT-END WEB",
    date: "2021",
    imagePath: "./marvel-banner.jpg",
  },
];
</script>
<template>
  <div class="project-list-container">
    <div v-for="project in projects" :key="project.title">
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
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
