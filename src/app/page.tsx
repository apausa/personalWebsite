"use client";

import { useEffect, useState } from "react";

import Folder from "@/components/bits/Folder";
import { About } from "@/components/page/about";
import { Links } from "@/components/page/links";
import { Mail } from "@/components/page/mail";
import { ModeToggle } from "@/components/page/mode-toggle";
import { P5Sketch } from "@/components/page/p5-sketch";
import { Place } from "@/components/page/place";
import { Spotify } from "@/components/page/spotify";
import { Time } from "@/components/page/time";
import { Separator } from "@/components/ui/separator";
import { DESCRIPTION, TITLE } from "@/lib/constants";

const images = [
  "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
];

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
    <>
      <P5Sketch />
      <div
        className="
        max-w-2xl
        flex
        flex-col
        md:justify-center
        min-h-dvh
        mx-auto
        px-4
        pt-8
        pb-12
        text-lg
        "
      >
        <div className="absolute right-4 md:right-8 top-8 z-2">
          <ModeToggle />
        </div>
        <div className="grid grid-cols-6 gap-4">
          {/* Header */}
          <h1 className="col-span-6 text-4xl font-bold dark:text-custom-purple">
            {TITLE}
          </h1>
          <h2 className="col-span-6 text-2xl">{DESCRIPTION}</h2>
          <div className="col-span-6 ">
            <Place />
          </div>
          <div className="col-span-6 -mt-2">
            <Mail />
          </div>

          <Separator className="col-span-6" />

          {/* Main */}
          <div className="col-span-6 md:col-span-6">
            <Links />
          </div>
          <div className="col-span-6">
            <About />
          </div>

          <Separator className="col-span-6 invisible" />

          {/* Footer */}
          <div className="col-span-6">
            <Spotify />
          </div>
          <div className="col-span-6 -mt-2">
            <Time>{time}</Time>
          </div>

          <div className="col-span-6 flex justify-center pt-24">
            <Folder
              className="custom-folder"
              color="#ff79c6"
              items={images}
              size={1}
            />
          </div>
        </div>
      </div>
    </>
  );
}
