import { cn } from "@/lib/utils";

export function Place() {
  return (
    <p className={cn("min-w-0 break-words text-center")}>
      <a
        className="hover:underline"
        href="https://www.google.com/maps/place/Geneva,+Switzerland/"
        rel="noreferrer"
        target="_blank"
      >
        Geneva, Switzerland
      </a>
    </p>
  );
}
