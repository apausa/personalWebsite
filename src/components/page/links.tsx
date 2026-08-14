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
          className="col-span-6 bg-input/30 hover:bg-input/50 font-sans font-semibold"
          render={<Link href={link.href} target="_blank" />}
          size="lg"
          variant="outline"
        >
          <link.icon />
          {link.name}
        </Button>
      ))}
    </section>
  );
}
