import { IconMapPinFilled } from "@tabler/icons-react";

import { cn } from "@/lib/utils";

export function Place() {
  return (
    <p className={cn("min-w-0 break-words")}>
      <IconMapPinFilled className="w-4 h-4 inline-block mr-2" />
      Geneva, Switzerland
    </p>
  );
}
