import Vue from "vue";
import VueRouter from "vue-router";
import MyDashboard from "../views/MyDashboard.vue";
import MyProject from "../views/MyProject"; //not *name*.vue??
import MyTeam from "../views/MyTeam";
import TestView from "../views/TestView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: MyDashboard,
  },
  {
    path: "/projects",
    name: "projects",
    component: MyProject,
  },
  {
    path: "/team",
    name: "team",
    component: MyTeam,
  },
  {
    path: "/testview",
    name: "testview",
    component: TestView,
    //component: () => import("../views/TestView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
