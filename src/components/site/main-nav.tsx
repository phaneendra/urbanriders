"use client";

import * as React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { NavItem } from "types";
import { siteConfig } from "@/config/site";
import { NavLink } from "@/components/ui/navigation/NavLinks";
import { Icons } from "@/components/icons";

interface MainNavProps {
  items?: NavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="mr-4 hidden gap-6 md:flex md:gap-10">
      <NextLink href="/" className="mr-6 flex items-center gap-2">
        <Image
          src="/images/logo/logo-colored.png"
          alt="Start your cycling journey"
          className="size-12"
          width={48}
          height={48}
        />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </NextLink>
      {items?.length ? (
        <nav className="flex items-center gap-2">
          {items?.map((item, index) => (
            <NavLink
              key={index}
              asChild
              variant={item.href.startsWith(`/${segment}`) ? "soft" : "ghost"}
              data-active={item.href.startsWith(`/${segment}`)}
              data-disabled={item.disabled}
            >
              <NextLink href={item.disabled ? "#" : item.href}>
                {item.title}
              </NextLink>
            </NavLink>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
