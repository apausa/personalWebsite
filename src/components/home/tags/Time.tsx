"use client";

import { IconClockFilled } from "@tabler/icons-react";

import { cn } from "@/lib/utils/tailwind";

export default function Time({
  className,
  children: time,
}: {
  className: string;
  children: Date | null;
}) {
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
    <p className={cn("min-w-0 break-words", className)}>
      <IconClockFilled className="w-4 h-4 mb-1 inline-block align-text-center mr-2" />
      {month} {day}, {year} • {hours}:{minutes}:{seconds} at {timezone}
    </p>
  );
}
