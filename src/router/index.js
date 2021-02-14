import Vue from "vue";
import VueRouter from "vue-router";

const Home = () =>
  import(/* webpackChunkName: "group-Home" */ `../views/Home.vue`);
const Auth = () =>
  import(/* webpackChunkName: "group-Auth" */ `../views/auth.vue`);
const Ansøgning = () =>
  import(/* webpackChunkName: "group-Ansøgning" */ `../views/Ansøgning.vue`);
const SupporterAnsøgning = () =>
  import(
    /* webpackChunkName: "group-SupporterAnsøgning" */ `../views/SupporterAnsøgning.vue`
  );
const Profile = () =>
  import(/* webpackChunkName: "group-Profile" */ `../views/Profile.vue`);
const Logout = () =>
  import(/* webpackChunkName: "group-Logout" */ `../views/Logout.vue`);
const Ansøg = () =>
  import(/* webpackChunkName: "group-Ansøg" */ `../views/Ansøg.vue`);
const review = () =>
  import(/* webpackChunkName: "group-review" */ `../views/review.vue`);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/auth",
    name: "auth",
    component: Auth,
  },
  {
    path: "/application/:id",
    name: "Ansøgning",
    component: Ansøgning,
  },
  {
    path: "/supporter/:id",
    name: "Supporter",
    component: SupporterAnsøgning,
  },
  {
    path: "/review",
    name: "Review",
    component: review,
  },
  {
    path: "/apply",
    name: "Ansøg",
    component: Ansøg,
  },
  {
    path: "/profile/:id?",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
