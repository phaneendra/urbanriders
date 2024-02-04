import NextLink from "next/link";

import { marketingConfig } from "@/config/marketing";
import { NavLink } from "@/components/ui/navigation/NavLinks";
import { MainNav } from "@/components/site/main-nav";
import { MobileNav } from "@/components/site/mobile-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader>
        <MainNav items={marketingConfig.mainNav} />
        <MobileNav navItems={marketingConfig.sidebarNav} />
        <nav>
          <NavLink asChild variant="ghost">
            <NextLink href="/login">Login</NextLink>
          </NavLink>
        </nav>
      </SiteHeader>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
