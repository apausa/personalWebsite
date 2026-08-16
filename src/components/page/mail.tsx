import { IconMailFilled } from "@tabler/icons-react";

import { cn } from "@/lib/utils";

export function Mail() {
  return (
    <p className={cn("min-w-0 break-words")}>
      <IconMailFilled className="w-4 h-4 inline-block mr-2" />
      <a
        className="hover:underline dark:text-custom-green text-custom-red"
        href="mailto:pablo@apausa.dev"
        rel="noreferrer"
        target="_blank"
      >
        pablo@apausa.dev
      </a>
    </p>
  );
}
