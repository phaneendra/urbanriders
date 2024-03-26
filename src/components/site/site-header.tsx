"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export type ScrollState = "at-top" | "scrolling-up" | "scrolling-down";

interface SiteHeaderProps {
  children: React.ReactNode;
}

export function SiteHeader(props: SiteHeaderProps) {
  const [scrollState, setScrollState] = React.useState<ScrollState>("at-top");
  const { children } = props;

  React.useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const direction =
        previousScrollY < window.scrollY ? "scrolling-down" : "scrolling-up";
      const state = window.scrollY < 30 ? "at-top" : direction;
      previousScrollY = window.scrollY;
      setScrollState(state);
    };

    addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  const classes = cn(
    "shadow-border-b fixed top-0 z-50 w-full",
    scrollState == "at-top"
      ? "bg-transparent shadow-transparent transition-[border-color,box-shadow] duration-[180ms]"
      : "bg-canvas shadow-border"
  );

  return (
    <header className={classes}>
      <div className="container flex h-16 items-center justify-between">
        {children}
      </div>
    </header>
  );
}
