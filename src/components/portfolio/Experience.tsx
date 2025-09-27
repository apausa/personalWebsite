import { cn } from "@/lib/utils/tailwind";

export default function Experience({ className }: { className: string }) {
  return (
    <article className={cn("flex flex-col gap-4", className)}>
      <h3 className="font-bold text-xl">Recent Experience</h3>
      <ul className="flex flex-col gap-4">
        <li className="flex flex-col">
          <h4 className="font-semibold">CERN</h4>
          <p>Software Engineering Intern</p>
          <p>Geneva, Switzerland</p>
          <p>2023</p>
        </li>
        <li>
          <a
            className="text-custom-red dark:text-custom-green no-underline hover:underline font-semibold"
            href="https://www.linkedin.com/in/apausa/"
            rel="noreferrer"
            target="_blank"
          >
            See more in LinkedIn
          </a>
        </li>
      </ul>
    </article>
  );
}
