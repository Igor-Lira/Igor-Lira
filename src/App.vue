<template>
  <div class="page-content">
    <PresentationCard class="page-item" />
    <div class="links">
      <router-link to="/about-me" class="link-item"> About Me</router-link>
      <router-link to="/projects" class="link-item"> Projects </router-link>
      <router-link to="/test" class="link-item"> test</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import PresentationCard from './components/PresentationCard.vue'

export default {
  name: 'App',
  components: {
    PresentationCard,
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

.links {
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;

  font-family: 'Itim';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  color: #C4C4C4;
}

.link-item {
  text-decoration: inherit;
  margin-top: 20px;
  margin-left: 10px;
}
</style>
