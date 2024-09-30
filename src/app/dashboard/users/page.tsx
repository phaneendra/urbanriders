import { redirect } from "next/navigation";
import { ProfileWithUsers } from "@/types";

import { getCurrentUser } from "@/lib/auth/sessions";
import { getAllProfiles } from "@/lib/profile/profile.queries";
import { Separator } from "@/components/ui/elements/Separator";
import { BreadcrumbNav } from "@/app/dashboard/_components/breadcrumbnav";
import { DashboardHeader } from "@/app/dashboard/_components/header";
import { DashboardShell } from "@/app/dashboard/_components/shell";

import { UserList } from "./_components/user-table";

export const metadata = {
  title: "Users",
  description: "Registered members of the community.",
};

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Users", link: "/dashboard/users" },
];

// const users: ProfileWithUsers[] = [
//   {
//     id: 1,
//     userId: 1,
//     displayName: "Candice Schiner",
//     bio: "Dell",
//     image: "",
//     imageId: "",
//     user: {
//       id: 1,
//       role: "guest",
//       email: "@gmail.com",
//       emailVerified: new Date(),
//       status: "active",
//     },
//   },
//   {
//     id: 2,
//     userId: 2,
//     displayName: "John Doe",
//     bio: "TechCorp",
//     image: "",
//     imageId: "",
//     user: {
//       id: 2,
//       role: "guest",
//       email: "@gmail.com",
//       emailVerified: new Date(),
//       status: "active",
//     },
//   },
//   {
//     id: 3,
//     userId: 3,
//     displayName: "Alice Johnson",
//     bio: "WebTech",
//     image: "",
//     imageId: "",
//     user: {
//       id: 3,
//       role: "guest",
//       email: "@gmail.com",
//       emailVerified: new Date(),
//       status: "active",
//     },
//   },
//   {
//     id: 4,
//     userId: 4,
//     displayName: "David Smith",
//     bio: "Innovate Inc.",
//     image: "",
//     imageId: "",
//     user: {
//       id: 4,
//       role: "guest",
//       email: "@gmail.com",
//       emailVerified: new Date(),
//       status: "inactive",
//     },
//   },
//   {
//     id: 5,
//     userId: 5,
//     displayName: "Emma Wilson",
//     bio: "TechGuru",
//     image: "",
//     imageId: "",
//     user: {
//       id: 5,
//       role: "admin",
//       email: "@gmail.com",
//       emailVerified: new Date(),
//       status: "active",
//     },
//   },
//   {
//     id: 6,
//     userId: 6,
//     displayName: "James Brown",
//     bio: "CodeGenius",
//     image: "",
//     imageId: "",
//     user: {
//       id: 6,
//       role: "guest",
//       email: "@gmail.com",
//       emailVerified: new Date(),
//       status: "active",
//     },
//   },
//   {
//     id: 7,
//     userId: 7,
//     displayName: "Laura White",
//     bio: "SoftWorks",
//     image: "",
//     imageId: "",
//     user: {
//       id: 7,
//       role: "member",
//       email: "@gmail.com",
//       emailVerified: new Date(),
//       status: "active",
//     },
//   },
//   {
//     id: 8,
//     userId: 8,
//     displayName: "Michael Lee",
//     bio: "DevCraft",
//     image: "",
//     imageId: "",
//     user: {
//       id: 8,
//       role: "guest",
//       email: "@gmail.com",
//       emailVerified: new Date(),
//       status: "active",
//     },
//   },
//   {
//     id: 9,
//     userId: 9,
//     displayName: "Olivia Green",
//     bio: "WebSolutions",
//     image: "",
//     imageId: "",
//     user: {
//       id: 9,
//       role: "guest",
//       email: "@gmail.com",
//       emailVerified: new Date(),
//       status: "active",
//     },
//   },
//   {
//     id: 10,
//     userId: 10,
//     displayName: "Robert Taylor",
//     bio: "DataTech",
//     image: "",
//     imageId: "",
//     user: {
//       id: 10,
//       role: "guest",
//       email: "@gmail.com",
//       emailVerified: new Date(),
//       status: "active",
//     },
//   },
// ];

export default async function DashboardPage() {
  // checking if user is authenticated
  const user = await getCurrentUser();
  if (!user) redirect("/signin");

  // check if user is admin
  if (user.role !== "admin") redirect("/dashboard");

  // get all users
  const users = await getAllProfiles();

  return (
    <DashboardShell>
      <BreadcrumbNav items={breadcrumbItems} />
      <DashboardHeader
        heading="USERS"
        text="Manage members of the community."
      />
      <Separator />
      <div className="grid gap-8 py-8">
        <UserList data={users} />
      </div>
    </DashboardShell>
  );
}
