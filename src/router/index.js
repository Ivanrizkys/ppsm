import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import LoginAdmin from "../pages/LoginAdmin.vue";
import HomeAdmin from "../pages/HomeAdmin.vue";
import AddEvent from "../pages/AddEvent.vue";
import EventListAdmin from "../pages/EventListAdmin.vue";
import AllEvents from "../pages/AllEvents.vue";
import DetailEvent from "../pages/Details.vue";
import EventDetailAdmin from "../pages/EventDetailAdmin.vue";
import Login from "../pages/LoginUser.vue";
import RegisterUser from "../pages/RegisterUser.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login-admin",
    name: "LoginAdmin",
    component: LoginAdmin,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterUser,
  },
  {
    path: "/events",
    name: "Events",
    component: AllEvents,
  },
  {
    path: "/events/:eventId",
    name: "DetailEvent",
    component: DetailEvent,
  },
  {
    path: "/admin/add-event",
    name: "AddEvent",
    component: AddEvent,
  },
  {
    path: "/admin",
    name: "Admin",
    component: HomeAdmin,
  },
  {
    path: "/admin/event-list",
    name: "EventList",
    component: EventListAdmin,
  },
  {
    path: "/admin/event-list/:eventId",
    name: "EventDetailAdmin",
    component: EventDetailAdmin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
