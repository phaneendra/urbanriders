import Link from "next/link";

import { docsConfig } from "@/config/docs";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { DocsSearch } from "@/components/search";
import { DocsSidebarNav } from "@/components/sidebar-nav";
import { MainNav } from "@/components/site/main-nav";
import { SiteFooter } from "@/components/site/site-footer";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-panel sticky top-0 z-40 w-full border-b">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav items={docsConfig.mainNav}>
            <DocsSidebarNav items={docsConfig.sidebarNav} />
          </MainNav>
          <div className="flex flex-1 items-center space-x-4 sm:justify-end">
            <div className="flex-1 sm:grow-0">
              <DocsSearch />
            </div>
            <nav className="flex space-x-4">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <Icons.gitHub className="h-7 w-7" />
                <span className="sr-only">GitHub</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <div className="flex-1">{children}</div>
      <SiteFooter className="border-t" />
    </div>
  );
}
