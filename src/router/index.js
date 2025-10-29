import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/pages/HomeView.vue";
import AboutView from "@/pages/AboutView.vue";
import DetailsPage from "@/pages/detailspage/DetailsPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomeView },
    { path: "/about", component: AboutView },
    { path: "/details/:id", name: "details", component: DetailsPage },
  ],
});

export default router;
