import { createRouter, createWebHistory } from "vue-router";

// Import all components that will be used as pages
const HomePage = import("./views/Home.vue");

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
  ],
});

export default routes;
