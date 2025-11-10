"use client";

import About from "@/components/home/About";
import Highlights from "@/components/home/Highlights";
import Links from "@/components/home/Links";
import Contact from "@/components/home/tags/Contact";
import Place from "@/components/home/tags/Place";
import Spotify from "@/components/home/tags/Spotify";
import Time from "@/components/home/tags/Time";
import Title from "@/components/home/Title";
import Education from "@/components/portfolio/Education";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/ui/toggle";

export default function Home() {
  return (
    <div className="flex flex-col xl:flex-row xl:justify-between">
      <main
        className="
        min-w-sm
        max-w-4xl

        flex
        flex-col

        justify-between
        gap-4
        min-h-dvh
        mx-auto

        relative
        px-4
        pt-12
        pb-16
        "
      >
        <div className="fixed right-4 top-12 z-1 xs:absolute">
          <ModeToggle />
        </div>
        <div className="grid grid-cols-6 gap-4 justify-center justify-items">
          <Title className="col-span-6" />
          <Contact className="col-span-6 md:col-span-2" />
          <Place className="col-span-6 md:col-span-4 -mt-2 md:mt-0 " />
          <Separator className="col-span-6" />
          <About className="col-span-6" />
          <Separator className="col-span-6" />
          <Links className="col-span-6" />
          <Highlights className="col-span-6 md:col-span-6" />
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-6 md:col-span-4 flex flex-col gap-2 justify-end">
            <Spotify className="" />
            <Time className="" />
          </div>
          {/* <Carrousel className="col-span-6 md:col-span-2" /> */}
        </div>
      </main>
      {/* <aside
        className="
        xl:w-xl
        flex
        flex-col
        bg-input/30
        border-t
        xl:border-t-0
        xl:border-l
      "
      >
        <div
          className="
          min-w-sm
          max-w-4xl

          grid
          gap-4

          mx-auto
          px-4
          pt-12
          pb-16
          xl:p-16
          xl:pl-12
          "
        >
          <Education className="col-span-6" />
          <Separator className="col-span-6" />
          <Experience className="col-span-6" />
          <Separator className="col-span-6" />
          <Projects className="col-span-6" />
        </div>
      </aside> */}
    </div>
  );
}
