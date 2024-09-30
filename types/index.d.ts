import localFont from "next/font/local";
import type { Icon } from "lucide-react";

import { Icons } from "@/components/icons";

import { GitHub } from "../../devkit/apps/dash/src/components/icons/Github";

// Authentication and Authorization Types
export type UserId = number;
// export type User = User;
export type { User, Role, Status } from "@/lib/auth/dataaccess/schema";
export type {
  Profile,
  ProfileWithUsers,
} from "@/lib/profile/dataaccess/schema";
export interface GitHubUser {
  id: string;
  login: string;
  avatar_url: string;
  email: string;
}

interface GitHubEmail {
  email: string;
  primary: boolean;
  verified: boolean;
  visibility: string | null;
}

// export type User = {
//   id: string;
//   name: string | null;
//   email: string | null;
//   emailVerified: Date | null;
//   image: string | null;
//   createdAt: Date;
//   updatedAt: Date;
//   stripeCustomerId: string | null;
//   stripeSubscriptionId: string | null;
//   stripePriceId: string | null;
//   stripeCurrentPeriodEnd: Date | null;
// };
// -----------------------------------------------------------------------------

// Navigation Types
export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}

export type SiteConfig = {
  name: string;
  description: string;
  keywords: string[];
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
    instagram: string;
    facebook: string;
    discord: string;
    strava: string;
  };
  authors: {
    name: string;
    url: string;
  }[];
  creator: string;
  creatorTwitterhandle: string;
  loginCallbackUrl: string;
};

export type MenuConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};
// -----------------------------------------------------------------------------

// Stripe Types
export type SubscriptionPlan = {
  name: string;
  description: string;
  stripePriceId: string;
};

export type UserSubscriptionPlan = SubscriptionPlan &
  Pick<User, "stripeCustomerId" | "stripeSubscriptionId"> & {
    stripeCurrentPeriodEnd: number;
    isPro: boolean;
  };

// Application Types
export type Post = {
  id: string;
  title: string;
  content: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
};
// -----------------------------------------------------------------------------
