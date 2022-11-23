import { createRouter, createWebHashHistory } from "vue-router";
import UserView from "@/views/UserView";
import StatisticsView from "@/views/StatisticsView";

const routes = [
  {
    path: "/",
    component: UserView,
  },
  {
    path: "/statistics",
    component: StatisticsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
