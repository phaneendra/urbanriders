import * as React from "react";
import Image from "next/image";
import { IconFlame } from "@tabler/icons-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/site/mode-toggle";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          {/* <Image
            src="/images/logo/logo-colored.png"
            alt="Start your cycling journey"
            className="size-6"
            width={48}
            height={48}
          /> */}
          <IconFlame className="size-6" />
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <a
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              {siteConfig.creator}
            </a>
            .
          </p>
        </div>
        <ModeToggle />
      </div>
    </footer>
  );
}
