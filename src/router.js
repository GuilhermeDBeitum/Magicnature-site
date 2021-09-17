import Vue from "vue";
import Router from "vue-router";
import home from "@/components/Home";
import aboult from "@/components/Aboult";
import register from "@/components/Register";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "",
      component: home,
    },
    {
      path: "/home",
      name: "home",
      component: home,
    },
    {
      path: "/sobre",
      name: "sobre",
      component: aboult,
    },
    {
      path: "/cadastro",
      name: "cadastro",
      component: register,
    },
  ],
});
