import { IconMailFilled } from "@tabler/icons-react";

import { cn } from "@/lib/utils/tailwind";

export default function Contact({ className }: { className: string }) {
  return (
    <p
      className={cn(
        "text-custom-selection dark:text-custom-purple min-w-0 break-words text-justify",
        className,
      )}
    >
      <IconMailFilled className="w-4 h-4 mb-1 inline-block align-text-center mr-2" />
      Data Engineer at CERN{" "}
      <a
        className="font-semibold hover:underline"
        href="https://home.cern/science/accelerators/future-circular-collider"
        rel="noreferrer"
        target="_blank"
      >
        Future Circular Collider Study
      </a>{" "}
      — MSc in Artificial Intelligence at Technical University of Madrid
    </p>
  );
}
