"use client";

import { useEffect, useState } from "react";

import { Links } from "@/components/page/links";
import { ModeToggle } from "@/components/page/mode-toggle";
import { Place } from "@/components/page/place";
import { Spotify } from "@/components/page/spotify";
import { Time } from "@/components/page/time";
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
          <section className="flex flex-col gap-2 items-center col-span-6">
            <h1 className="text-4xl font-semibold dark:text-custom-purple">
              Pablo Apausa
            </h1>
          </section>
          <div className="col-span-6 flex flex-col gap-2 items-center">
            <p className="min-w-0 break-words text-center">
              Software Engineer at CERN — MS in Artificial Intelligence
            </p>
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
