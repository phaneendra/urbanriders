import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { AspectRatio } from "@/components/ui/layout/AspectRatio";
import { Icons } from "@/components/icons";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="grid min-h-screen grid-cols-1 overflow-hidden md:grid-cols-3 lg:grid-cols-2">
      <AspectRatio ratio={16 / 9} className="relative inset-0">
        <Image
          src="/images/signin/auth-layout.webp"
          alt="Start your cycling journey"
          fill
          className="inset-0 h-[100vh] w-full object-cover opacity-30"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="from-ui to-canvas md:to-panel absolute inset-0 -z-10 h-[100vh] w-full bg-gradient-to-t" />
        <Link
          href="/"
          className="absolute left-8 top-6 z-20 flex items-center text-lg font-bold tracking-tight"
        >
          <Icons.logo className="mr-2 h-6 w-6" aria-hidden="true" />
          <span>{siteConfig.name}</span>
        </Link>
        <div className="absolute bottom-6 left-8 z-20 line-clamp-1 text-base">
          Photo by{" "}
          <a
            href="https://unsplash.com/@andrew_gook?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            className="hover:underline"
          >
            Andrew Gook
          </a>{" "}
          on{" "}
          <a
            href="https://unsplash.com/photos/bicycle-lane-VRLHw_rBjIw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            className="hover:underline"
          >
            Unsplash
          </a>
        </div>
      </AspectRatio>
      <main className="container absolute top-1/2 col-span-1 flex -translate-y-1/2 items-center justify-center md:static md:top-0 md:col-span-2 md:flex md:translate-y-0 lg:col-span-1">
        {children}
      </main>
    </div>
  );
}
