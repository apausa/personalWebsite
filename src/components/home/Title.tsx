"use client";

import { cn } from "@/lib/utils/tailwind";

export default function Title({ className }: { className: string }) {
  return (
    <section className={cn("flex flex-col gap-2", className)}>
      <h1 className="text-5xl font-medium">Pablo Apausa</h1>
    </section>
  );
}
