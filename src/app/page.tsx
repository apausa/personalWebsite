"use client";

import { useEffect, useState } from "react";

import Contact from "@/components/page/Contact";
import Links from "@/components/page/Links";
import ModeToggle from "@/components/page/ModeToggle";
import Place from "@/components/page/Place";
import Spotify from "@/components/page/Spotify";
import Time from "@/components/page/Time";
import Title from "@/components/page/Title";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    // Set initial time after mount to avoid hydration mismatch
    setTime(new Date());

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col xl:flex-row xl:justify-between">
      <div className="fixed right-4 md:right-8 top-8 z-2 xs:absolute">
        <ModeToggle />
      </div>
      <main
        className="
        min-w-sm
        max-w-2xl
        flex
        flex-col
        justify-center
        gap-4
        min-h-dvh
        mx-auto
        relative
        px-4
        pt-8
        pb-12
        "
      >
        <div className="grid grid-cols-6 gap-4 justify-center justify-items">
          <Title className="col-span-6" />
          <div className="col-span-6 flex flex-col gap-2 items-center">
            <Contact className="" />
            <Place className="" />
          </div>
          <Separator className="col-span-6" />
          <Links className="col-span-6" />
          <Separator className="col-span-6 invisible" />
          <div className="col-span-6 flex flex-col gap-2">
            <Spotify className="" />
            <Time className="">{time}</Time>
          </div>
        </div>
      </main>
    </div>
  );
}
