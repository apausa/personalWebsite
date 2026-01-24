import { IconWorld } from "@tabler/icons-react";

import { cn } from "@/lib/utils/tailwind";

export default function Place({ className }: { className: string }) {
  return (
    <p
      className={cn(
        "min-w-0 break-words text-custom-red dark:text-custom-purple text-justify",
        className,
      )}
    >
      <IconWorld
        className="w-4 h-4 mb-1 inline-block align-text-center mr-2"
        stroke={2}
      />
      <a
        className="font-semibold hover:underline"
        href="https://www.google.com/maps/place/Geneva,+Switzerland/"
        rel="noreferrer"
        target="_blank"
      >
        Geneva, Switzerland
      </a>
    </p>
  );
}
