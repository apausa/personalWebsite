import { projects } from "@/lib/constants/about";
import { cn } from "@/lib/utils/tailwind";

export default function Projects({ className }: { className: string }) {
  return (
    <article className={cn("flex flex-col gap-4", className)}>
      <h3 className="font-bold text-xl">Recent Projects</h3>
      <ul className="flex flex-col gap-4">
        <li className="flex flex-col">
          <h4 className="font-semibold">
            <a
              className="hover:underline"
              href={projects[0].href}
              rel="noreferrer"
              target="_blank"
            >
              {projects[0].name}
            </a>
          </h4>
          <p>{projects[0].description}</p>
        </li>
        <li>
          <a
            className="text-custom-red dark:text-custom-green no-underline hover:underline font-semibold"
            href="https://github.com/apausa"
            rel="noreferrer"
            target="_blank"
          >
            See more in GitHub
          </a>
        </li>
      </ul>
    </article>
  );
}
