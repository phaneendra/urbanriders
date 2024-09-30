import { redirect } from "next/navigation";

import { UserNameForm } from "@/components/user-name-form";
import { DashboardHeader } from "@/app/dashboard/_components/header";
import { DashboardShell } from "@/app/dashboard/_components/shell";

export const metadata = {
  title: "Settings",
  description: "Manage account and website settings.",
};

export default async function SettingsPage() {
  // const user = await getCurrentUser();

  // if (!user) {
  //   redirect(authOptions?.pages?.signIn || "/login");
  // }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <div className="grid gap-10">
        {/* <UserNameForm user={{ id: user.id, name: user.name || "" }} /> */}
      </div>
    </DashboardShell>
  );
}
