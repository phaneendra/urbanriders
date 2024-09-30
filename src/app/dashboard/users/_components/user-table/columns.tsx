"use client";

import { ProfileWithUsers } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/data-display/Badge";
import { Checkbox } from "@/components/ui/forms/Checkbox";
import { UserAvatar } from "@/app/dashboard/users/_components/user-avatar";

import { CellAction } from "./cell-action";

export const columns: ColumnDef<ProfileWithUsers>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "displayName",
    header: "NAME",
    cell: ({ row }) => <UserAvatar user={row.original} />,
  },
  {
    accessorKey: "user.email",
    header: "EMAIL",
  },
  {
    id: "role",
    accessorKey: "user.role",
    header: "ROLE",
    cell: ({ row }) => {
      return (
        <Badge variant="outline" className="mr-2">
          {row.original.user.role}
        </Badge>
      );
    },
  },
  {
    id: "status",
    accessorKey: "user.status",
    header: "STATUS",
    cell: ({ row }) => {
      return (
        <Badge variant="outline" className="mr-2">
          {row.original.user.status}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
