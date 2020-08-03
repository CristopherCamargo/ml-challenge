import { HomeHOC, DetailHOC } from "~/components/pages";

const routes = [
  {
    path: "/",
    component: HomeHOC
  },
  {
    path: "/item/:id",
    component: DetailHOC
  }
];

export default routes;
