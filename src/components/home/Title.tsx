"use client";

import { cn } from "@/lib/utils/tailwind";

export default function Title({ className }: { className: string }) {
  return (
    <section className={cn("flex flex-col gap-2", className)}>
      <h1 className="text-4xl font-bold">Pablo Apausa</h1>
      <h2 className="text-xl">
        Software Engineer at CERN Future Circular Collider Study — MSc in
        Artificial Intelligence at Technical University of Madrid
      </h2>
    </section>
  );
}
