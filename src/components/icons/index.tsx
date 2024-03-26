import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Clipboard,
  Command,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Info,
  Laptop,
  Link,
  Loader2,
  LucideProps,
  Menu,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Search,
  Settings,
  SunMedium,
  Trash,
  Twitter,
  User,
  X,
} from "lucide-react";

import { Discord } from "@/components/icons/discord";
import { DiscordCircle } from "@/components/icons/discord-circle";
import { Facebook } from "@/components/icons/facebook";
import { GitHub } from "@/components/icons/github";
import { Google } from "@/components/icons/google";
import { Logo } from "@/components/icons/logo";
import { NextAuth } from "@/components/icons/nextauth";
import { Nextjs } from "@/components/icons/nextjs";
import { PlanetScale } from "@/components/icons/planetscale";
import { React } from "@/components/icons/react";
import { Strava } from "@/components/icons/strava";
import { Stripe } from "@/components/icons/stripe";
import { Tailwind } from "@/components/icons/tailwind";

export type Icon = LucideProps;

export const Icons = {
  logo: Logo,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  menu: Menu,
  gitHub: GitHub,
  nextJs: Nextjs,
  react: React,
  planetscale: PlanetScale,
  tailwind: Tailwind,
  nextauth: NextAuth,
  stripe: Stripe,
  twitter: Twitter,
  google: Google,
  facebook: Facebook,
  discord: Discord,
  discordCircle: DiscordCircle,
  strava: Strava,
  check: Check,
  search: Search,
  clipboard: Clipboard,
  link: Link,
  info: Info,
};
