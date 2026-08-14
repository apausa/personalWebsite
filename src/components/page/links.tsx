import Link from "next/link";

import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Links({ className }: { className: string }) {
  return (
    <section className={cn("grid grid-cols-6 gap-4", className)}>
      {LINKS.map((link) => (
        <Button
          key={link.name}
          asChild
          className="col-span-6 bg-input/30 hover:bg-input/50 font-sans font-semibold"
          size="lg"
          variant="outline"
        >
          <Link href={link.href} target="_blank">
            <link.icon />
            {link.name}
          </Link>
        </Button>
      ))}
    </section>
  );
}
