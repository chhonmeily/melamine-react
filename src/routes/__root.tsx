import MainNavbar from "@/components/MainNavbar";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <MainNavbar />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
