"use client";

import { IconClockFilled } from "@tabler/icons-react";

import { cn } from "@/lib/utils";

export function Time({ children: time }: { children: Date | null }) {
  // Show placeholder until hydrated to avoid mismatch
  if (!time) {
    return <div />;
  }

  const day = time.getDate();
  const month = time.toLocaleString("default", { month: "long" });
  const year = time.getFullYear();
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const timezone = time
    .toString()
    .split(" ")[5]
    .split("")
    .map((char) => char.replace("0", ""))
    .join("");

  return (
    <p className={cn("min-w-0 break-words")}>
      <IconClockFilled className="w-4 h-4 inline-block mr-2" />
      {month} {day}, {year} • {hours}:{minutes}:{seconds} at {timezone}
    </p>
  );
}
