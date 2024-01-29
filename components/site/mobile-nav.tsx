"use client";

import * as React from "react";
import NextLink from "next/link";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";

import { SidebarNavItem } from "types";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/data-display/Accordian";
import { Button } from "@/components/ui/elements/Button";
import { ScrollArea } from "@/components/ui/elements/ScrollArea";
import { NavLink } from "@/components/ui/navigation/NavLinks";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/panels/Sheet";
import { Icons } from "@/components/icons";

interface MobileNavProps {
  navItems: SidebarNavItem[];
  children?: React.ReactNode;
}

export function MobileNav({ navItems, children }: MobileNavProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const segment = useSelectedLayoutSegment();

  const handleNavigation = async (event) => {
    event.preventDefault();
    setOpen(false);
    await router.push(event.target.href.toString());
  };

  const MenuIcon = (icon: string) => {
    const Icon = Icons[icon];
    return <Icon className="mr-2 h-4 w-4 shrink-0" aria-hidden="true" />;
  };

  const SideBarNavItem = (navItem: SidebarNavItem[]) => {
    return (
      <>
        {navItem?.map((item, index) =>
          item.items.length ? (
            <Accordion type="single" collapsible key={index}>
              <AccordionItem value={item.title} className="border-b-0">
                <AccordionTrigger
                  size="sm"
                  variant="ghost"
                  data-disabled={item.disabled}
                  className={cn("justify-between")}
                >
                  <div className="flex items-center justify-start">
                    {item.icon && MenuIcon(item.icon)}
                    {item.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="ml-7 flex flex-col space-y-1">
                    {SideBarNavItem(item.items)}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : (
            item.href && (
              <NavLink
                key={index}
                size="sm"
                variant={item.href.startsWith(`/${segment}`) ? "soft" : "ghost"}
                data-active={item.href.startsWith(`/${segment}`)}
                data-disabled={item.disabled}
                className={cn("justify-start")}
              >
                <NextLink href={item.href} onClick={(e) => handleNavigation(e)}>
                  {item.icon && MenuIcon(item.icon)}
                  {item.title}
                </NextLink>
              </NavLink>
            )
          )
        )}
      </>
    );
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Icons.menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pl-1 pr-0">
        <NextLink
          href="/"
          className="flex items-center gap-2 px-7"
          onClick={(e) => handleNavigation(e)}
        >
          <Icons.logo className="h-10 w-10" />
          <span className="font-bold">{siteConfig.name}</span>
        </NextLink>
        <ScrollArea
          scrollbars="vertical"
          className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6"
        >
          <nav className="flex flex-col gap-1 pl-1 pr-7">
            {SideBarNavItem(navItems)}
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
