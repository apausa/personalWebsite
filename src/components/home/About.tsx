import { description } from "@/lib/constants/about";
import { cn } from "@/lib/utils/tailwind";

export default function About({ className }: { className: string }) {
  return (
    <section className={cn("flex flex-col gap-2 pb-2", className)}>
      <h3 className="font-bold">About me</h3>
      {description.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  );
}
