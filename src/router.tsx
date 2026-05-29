import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

function getBasepath() {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === "/" ? "/" : baseUrl.replace(/\/$/, "");
}

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    basepath: getBasepath(),
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
