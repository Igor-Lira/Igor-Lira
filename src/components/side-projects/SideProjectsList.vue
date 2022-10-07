<script setup>
import ProjectList from "../ProjectList.vue";
const projects = [
  {
    name: "marvel",
    title: "MARVEL WORLD",
    category: "FRONT-END WEB",
    date: "2021",
    imagePath: "./marvel-banner.png",
  },
  {
    name: "post-your-ideas",
    title: "POST YOUR IDEAS",
    category: "FULL-STACK WEB",
    date: "2022",
    imagePath: "./post-your-ideas-banner.jpg",
  },
  {
    name: "find-your-duo",
    title: "FIND YOUR DUO",
    category: "FULL-STACK WEB",
    date: "2022",
    imagePath: "./find-your-duo-banner.png",
  },
];
</script>

<template>
  <ProjectList :projects="projects" />
</template>
