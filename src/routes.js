import * as VueRouter from "vue-router";
import AboutMe from "./components/AboutMe.vue";
import MarvelWorld from "./components/side-projects/MarvelWorld.vue";
import ProjectList from "./components/ProjectList.vue";
import PostYourIdeas from "./components/side-projects/PostYourIdeas.vue";
import FindYourDuo from "./components/side-projects/FindYourDuo.vue";
import { publicPath } from "../vue.config";

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
  history: VueRouter.createWebHistory(publicPath),
  routes,
});

export default router;
