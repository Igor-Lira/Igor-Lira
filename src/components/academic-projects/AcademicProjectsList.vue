<script setup>
import ProjectList from "../ProjectList.vue";
const projects = [
  {
    name: 'structural-optimization',
    title: "STRUCTURAL OPTIMIZATION PROJECT",
    category: "OPTIMIZATION",
    date: "2022",
    imagePath: "./optimization-banner.png",
  },
  {
    name: 'ai',
    title: "AI TO PREDICT CONCRETE PROPERTIES",
    category: "MACHINE LEARNING",
    date: "2022",
    imagePath: "./ai-banner.png",
  },
  // {
  //   name: 'skyplot',
  //   title: "SKYPLOT IN AN ANDROID APPLICATION",
  //   category: "MOBILE DEVELOPMENT",
  //   date: "2021",
  //   imagePath: "./skyplot-banner.png",
  // },
];
</script>

<template>
  <ProjectList :projects="projects" />
</template>
