<template>
  <div class="page-content">
    <PresentationCard class="page-item" />
    <ProjectList class="page-item" />
    <AboutMe class="page-item" />
  </div>
</template>

<script>
import PresentationCard from './components/PresentationCard.vue'
import ProjectList from './components/ProjectList.vue'
import AboutMe from './components/AboutMe.vue'

export default {
  name: 'App',
  components: {
    PresentationCard,
    ProjectList,
    AboutMe,
  }
}
</script>

<style>
.page-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.page-item {
  width: 100%;
  height: auto;
}
</style>
