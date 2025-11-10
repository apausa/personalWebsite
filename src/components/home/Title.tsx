"use client";

import { cn } from "@/lib/utils/tailwind";

export default function Title({ className }: { className: string }) {
  return (
    <section className={cn("flex flex-col gap-2", className)}>
      <h1 className="text-4xl font-bold">Pablo Apausa</h1>
      <h2 className="text-2xl">
        Software Engineer and Designer — MS in Artificial Intelligence
      </h2>
    </section>
  );
}
