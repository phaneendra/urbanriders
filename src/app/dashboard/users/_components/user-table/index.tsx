"use client";

import type { ProfileWithUsers } from "@/types";

import { DataTable } from "@/components/ui/data-display/DataTable";

import { columns } from "./columns";

interface UserListProps {
  data: ProfileWithUsers[];
}

export const UserList: React.FC<UserListProps> = ({ data }) => {
  // const router = useRouter();

  return <DataTable columns={columns} data={data} />;
};
