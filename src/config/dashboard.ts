import { MenuConfig } from "types";

export const dashboardConfig: MenuConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Posts",
      href: "/posts",
    },
    {
      title: "Events",
      href: "/events",
    },
    {
      title: "Challenges",
      href: "/challenges",
    },
    {
      title: "Marketplace",
      href: "/marketplace",
    },
  ],
  sidebarNav: [
    {
      title: "Lobby",
      href: "/dashboard",
      icon: "post",
      items: [],
    },
    {
      title: "Members",
      href: "/dashboard/users",
      icon: "billing",
      items: [],
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: "billing",
      items: [],
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
      items: [],
    },
  ],
};
