import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: function () {
      return import("@/views/HomeView");
    },
  },
  {
    path: "/login",
    name: "Login",
    component: function () {
      return import("@/views/authorization/TheAuthorization");
    },
  },
  {
    path: "/registration",
    name: "Registration",
    component: function () {
      return import("@/views/registration/TheRegistration");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
