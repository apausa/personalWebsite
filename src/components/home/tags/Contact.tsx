import { cn } from "@/lib/utils/tailwind";

export default function Contact({ className }: { className: string }) {
  return (
    <p className={cn("min-w-0 break-words text-center", className)}>
      Software Engineer at CERN{" "}
      <a
        className="font-semibold hover:underline"
        href="https://home.cern/science/accelerators/future-circular-collider"
        rel="noreferrer"
        target="_blank"
      >
        FCC Study
      </a>{" "}
      — MS in Artificial Intelligence
    </p>
  );
}
