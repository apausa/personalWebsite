"use client";

import GradientText from "@/components/bits/GradientText";
import { cn } from "@/lib/utils/tailwind";

export default function Title({ className }: { className: string }) {
  return (
    <section className={cn("flex flex-col gap-2", className)}>
      <h1 className="text-5xl font-semibold">
        <GradientText
          animationSpeed={4}
          colors={["#50FA7B", "#8BE9FD", "#BD93F9", "#FF79C6"]}
        >
          Pablo Apausa
        </GradientText>
      </h1>
    </section>
  );
}
