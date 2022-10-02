import * as VueRouter from "vue-router";
import AboutMe from "./components/AboutMe.vue";
import MarvelWorld from "./components/MarvelWorld.vue";
import ProjectList from "./components/ProjectList.vue";
import PostYourIdeas from "./components/PostYourIdeas.vue";
import FindYourDuo from "./components/FindYourDuo.vue";

const routes = [
  { path: "/", component: AboutMe },
  { path: "/about-me", component: AboutMe },
  { path: "/projects", component: ProjectList },
  { path: "/projects/marvel-world", component: MarvelWorld, name: "marvel" },
  {
    path: "/projects/post-your-ideas",
    component: PostYourIdeas,
    name: "post-your-ideas",
  },
  {
    path: "/projects/find-your-duo",
    component: FindYourDuo,
    name: "find-your-duo",
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

export default router;
