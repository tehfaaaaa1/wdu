import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import AuthLayout from "../components/AuthLayout.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Surveys from "../views/Surveys.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [
      { path: "/dashboard", name: "Dashboard", component: Dashboard },
      { path: "/surveys", name: "Surveys", component: Surveys },
    ],
  },
  {
    path: "/auth",
    redirect: "/login",
    name: "Auth",
    component: AuthLayout,
    meta: { isGuest: true },
    children: [
      {
        path: "/login",
        Name: "Login",
        component: Login,
      },
      {
        path: "/Register",
        Name: "Register",
        component: Register,
      },
    ],
  },
  {
    path: "/reg",
    redirect: "/Register",
    name: "Reg",
    component: AuthLayout,
    meta: { isGuest: true },
    children: [
      {
        path: "/login",
        Name: "Login",
        component: Login,
      },
      {
        path: "/Register",
        Name: "Register",
        component: Register,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: "Auth" });
  } else if (store.state.user.token && to.meta.isGuest) {
    next({ name: "Dashboard" });
  } else {
    next();
  }
});
export default router;
