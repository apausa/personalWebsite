"use client";

import About from "@/components/home/About";
import Carrousel from "@/components/home/carrousel/Carrousel";
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
    <div className="relative flex flex-col xs:flex-row xs:h-dvh overflow-hidden xs:justify-between">
      <div className="fixed right-4 top-8 z-1 xs:absolute xs:right-16 xs:top-16">
        <ModeToggle />
      </div>
      <main
        className="
        w-full
        xs:w-4xl
        flex
        flex-col
        xs:justify-between
        px-4
        py-8
        xs:p-16
        gap-4
        "
      >
        <div className="grid grid-cols-6 gap-4 justify-center justify-items">
          <Title className="col-span-6" />
          <Contact className="col-span-6 xs:col-span-2" />
          <Place className="col-span-6 xs:col-span-4 -mt-2 xs:mt-0 " />
          <Separator className="col-span-6" />
          <About className="col-span-6" />
          <Separator className="col-span-6" />
          <Links className="col-span-6" />
          <Highlights className="col-span-6 xs:col-span-6" />
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-6 xs:col-span-4 flex flex-col gap-2 justify-end">
            <Spotify className="" />
            <Time className="" />
          </div>
          <Carrousel className="col-span-6 xs:col-span-2" />
        </div>
      </main>
      <aside
        className="
        xs:max-w-xl
        w-full
        xs:flex-1
        flex
        flex-col
        px-4
        pt-8
        pb-16
        xs:p-16
        xs:pl-8
        gap-8
        overflow-y-auto
        bg-input/30
        border-l
      "
      >
        <div className="grid grid-cols-6 gap-4">
          <Education className="col-span-6" />
          <Separator className="col-span-6" />
          <Experience className="col-span-6" />
          <Separator className="col-span-6" />
          <Projects className="col-span-6" />
        </div>
      </aside>
    </div>
  );
}
