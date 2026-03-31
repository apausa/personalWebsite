import { cn } from "@/lib/utils/tailwind";

export default function Place({ className }: { className: string }) {
  return (
    <p className={cn("min-w-0 break-words text-center", className)}>
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
