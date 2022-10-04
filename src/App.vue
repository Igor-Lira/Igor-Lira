<script setup>
import { watch, ref } from "vue";
import { useRouter } from "vue-router";
import { useMeta } from "vue-meta";

useMeta({
  title: "Igor Lira",
  description: `Igor Lira's Profile | Web Developer`,
  htmlAttrs: { lang: "en", amp: true },
});

const router = useRouter();
const isSideProjectActive = ref(false);
const isAcademicProjectActive = ref(false);
watch(
  () => router,
  () => {
    isSideProjectActive.value =
      router.currentRoute.value.path.includes("side-projects");
    isAcademicProjectActive.value =
      router.currentRoute.value.path.includes("academic-projects");
  },
  { deep: true }
);
</script>
<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content} | Profile` : `Profile`
    }}</template>
  </metainfo>
  <div class="page-content">
    <PresentationCard class="page-item" />
    <div class="links">
      <router-link to="/about-me" class="link-item w-1"> ABOUT ME </router-link>
      <router-link
        to="/side-projects"
        class="link-item"
        :class="[isSideProjectActive ? 'router-link-active w-2' : '']"
      >
        SIDE PROJECTS
      </router-link>
      <router-link
        to="/academic-projects"
        class="link-item"
        :class="[isAcademicProjectActive ? 'router-link-active w-3' : '']"
      >
        ACADEMIC
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import PresentationCard from "./components/PresentationCard.vue";

export default {
  name: "App",
  components: {
    PresentationCard,
  },
};
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

  font-family: "Itim";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 40px;
  color: #958d8d;
}

.link-item {
  position: relative;
  margin-top: 20px;
  margin-left: 15px;
}

.router-link-active::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 5px;
  height: 3px;
  transform: skew(-12deg) translateX(-50%);
  background: #958d8d;
  z-index: -1;
}

.w-1.router-link-active::before {
  width: 90px;
}
.w-2.router-link-active::before {
  width: 120px;
}
.w-3.router-link-active::before {
  width: 80px;
}
</style>

<style scoped>
a,
a:visited,
a:hover,
a:active {
  color: inherit;
  text-decoration: inherit;
}
</style>
