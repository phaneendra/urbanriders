import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth/sessions";
import { BreadcrumbNav } from "@/app/dashboard/_components/breadcrumbnav";
import { DashboardHeader } from "@/app/dashboard/_components/header";
import { DashboardShell } from "@/app/dashboard/_components/shell";

export const metadata = {
  title: "Dashboard",
  description: "One stop shop to stay fit and motivated.",
};
const breadcrumbItems = [{ title: "Dashboard", link: "/dashboard" }];

export default async function DashboardPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/signin");

  return (
    <DashboardShell>
      <BreadcrumbNav items={breadcrumbItems} />
      <DashboardHeader
        heading="Dashboard"
        text="One stop shop to stay fit and motivated."
      />
      <div className="grid gap-8 py-8">
        <span>Dashboard Content</span>
      </div>
    </DashboardShell>
  );
}
