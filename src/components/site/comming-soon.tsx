"use client";

import * as React from "react";

export const CommingSoon = () => {
  return (
    <div className="bg-overlay relative flex min-h-screen flex-col items-center justify-center px-4">
      <div className="absolute left-0 top-0 size-full bg-[url('/images/comingsoon/bg-coming-soon-light.jpg')] bg-cover bg-center opacity-30 dark:bg-[url('/images/comingsoon/bg-coming-soon.png')]"></div>

      <a href="#" className="mb-8 block text-3xl font-bold md:text-5xl">
        🔥 VibeUp
      </a>
      <h1 className="z-10 mb-8 text-5xl font-bold md:text-7xl">Coming Soon</h1>
      <p className="text-xl md:text-2xl">
        We&apos;re working hard to bring you something amazing. Stay tuned!
      </p>
    </div>
  );
};

// TODO : add attribution for Wallpaper by hanne from Wallpapers.com
