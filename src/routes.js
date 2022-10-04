import * as VueRouter from "vue-router";
import AboutMe from "./components/AboutMe.vue";
import MarvelWorld from "./components/side-projects/MarvelWorld.vue";
import PostYourIdeas from "./components/side-projects/PostYourIdeas.vue";
import FindYourDuo from "./components/side-projects/FindYourDuo.vue";
import SideProjectsList from "./components/side-projects/SideProjectsList.vue";
import AcademicProjectsList from "./components/academic-projects/AcademicProjectsList.vue";
import AI from "./components/academic-projects/AI.vue";
import StructuralOptimization from "./components/academic-projects/StructuralOptimization.vue";
import { publicPath } from "../vue.config";

const routes = [
  { path: "/", component: AboutMe },
  { path: "/about-me", component: AboutMe },
  {
    path: "/side-projects",
    component: SideProjectsList,
  },
  {
    path: "/side-projects/marvel-world",
    component: MarvelWorld,
    name: "marvel",
  },
  {
    path: "/side-projects/post-your-ideas",
    component: PostYourIdeas,
    name: "post-your-ideas",
  },
  {
    path: "/side-projects/find-your-duo",
    component: FindYourDuo,
    name: "find-your-duo",
  },
  {
    path: "/academic-projects",
    component: AcademicProjectsList,
  },
  {
    path: "/academic-projects/ai",
    name: "ai",
    component: AI,
  },
  {
    path: "/academic-projects/structural-optimization",
    name: "structural-optimization",
    component: StructuralOptimization,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(publicPath),
  routes,
});

export default router;
