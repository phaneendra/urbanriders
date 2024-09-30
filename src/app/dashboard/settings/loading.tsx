import { Card } from "@/components/ui/data-display/Card";
import { CardSkeleton } from "@/components/card-skeleton";
import { DashboardHeader } from "@/app/dashboard/_components/header";
import { DashboardShell } from "@/app/dashboard/_components/shell";

export default function DashboardSettingsLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
    </DashboardShell>
  );
}
