import ContactUs from "../views/ContactUs.vue";
import DevTools from "../views/DevTools.vue";
import Home from "../views/Home.vue";
import JobsAvail from "../views/JobsAvail.vue";
import Games from "../views/OurGames.vue";
import PressView from "../views/PressView.vue";
import TheTeam from "../views/TheTeam.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/games",
    name: "OurGames",
    component: Games,
  },
  {
    path: "/team",
    name: "Team",
    component: TheTeam,
  },
  {
    path: "/press",
    name: "Press",
    component: PressView,
  },
  {
    path: "/devtools",
    name: "Devtools",
    component: DevTools,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: JobsAvail,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactUs,
  },
];

export default routes;
