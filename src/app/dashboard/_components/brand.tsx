"use client";

import Link from "next/link";
import { IconFlame } from "@tabler/icons-react";

export default function SidebarBrand() {
  return (
    <div className="px-5 mb-6">
      <Link href="/" className="flex items-start gap-3">
        <div className="flex items-end justify-center w-11 h-[60px] pb-2 bg-primary rounded-b-lg">
          <IconFlame size={28} className="text-primary-contrast" />
        </div>
        <div className="flex flex-col pt-[10px]">
          <div className="text-xl font-bold tracking-[0.60em] inline-block">
            URBAN
          </div>
          <div className="text-base font-bold inline-block">CHALLENGERS</div>
          {/* <Chip color="primary" radius="full">Pro</Chip> */}
        </div>
      </Link>
    </div>
  );
}
