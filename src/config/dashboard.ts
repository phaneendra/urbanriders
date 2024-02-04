import { MenuConfig } from "types";

export const dashboardConfig: MenuConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Posts",
      href: "/dashboard",
      icon: "post",
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
