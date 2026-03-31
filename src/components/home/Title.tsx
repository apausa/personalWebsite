import { cn } from "@/lib/utils/tailwind";

export default function Title({ className }: { className: string }) {
  return (
    <section className={cn("flex flex-col gap-2 items-center", className)}>
      <h1 className="text-4xl font-semibold dark:text-custom-purple">
        Pablo Apausa
      </h1>
    </section>
  );
}
