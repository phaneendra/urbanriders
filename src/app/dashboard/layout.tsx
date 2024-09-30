import { dashboardConfig } from "@/config/dashboard";
import SidebarBrand from "@/app/dashboard/_components/brand";
import { DashboardNav } from "@/app/dashboard/_components/nav";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  // const user = await getCurrentUser();
  // const user = null;

  // if (!user) {
  //   return notFound();
  // }

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <div className="grid flex-1 gap-8 md:grid-cols-[256px_1fr]">
        <aside className="hidden w-[256px] flex-col md:flex bg-panel">
          <SidebarBrand />
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
