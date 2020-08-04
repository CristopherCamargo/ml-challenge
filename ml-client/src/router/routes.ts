import { HomeHOC, DetailHOC } from "~/components/pages";

const routes = [
  {
    path: "/",
    component: HomeHOC
  },
  {
    path: "/items",
    component: HomeHOC
  },
  {
    path: "/items/:id",
    component: DetailHOC
  }
];

export default routes;
