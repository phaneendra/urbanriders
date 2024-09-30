import { SiteConfig } from "types";

export const siteConfig: SiteConfig = {
  name: "Urban Challengers",
  description:
    "Connect and compete in virtual races, rides, and challenges to earn badges and rewards, all while staying motivated and healthy.",
  keywords: ["Bengaluru", "Virtual Events", "Virtual Challenges", "Motivation"],
  url: "https://urbanchallengers.pages.dev",
  ogImage: "https://urbanchallengers.pages.dev/opengraph-image.jpg",
  links: {
    strava: "https://www.strava.com/clubs/1057872",
    instagram: "https://www.instagram.com/teambcc_2021",
    facebook: "https://www.facebook.com/groups/735108077427124/",
    twitter: "https://twitter.com/BccTeam",
    discord: "https://discord.gg/7DtduHUZ",
    github: "https://github.com/phaneendra/urbanchallengers",
  },
  authors: [
    {
      name: "phaneendra",
      url: "https://phaneendra.vercel.app",
    },
  ],
  creator: "phaneendra",
  creatorTwitterhandle: "phaneendrak",
  loginCallbackUrl: "/dashboard",
};
