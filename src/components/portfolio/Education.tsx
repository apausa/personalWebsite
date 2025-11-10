import { cn } from "@/lib/utils/tailwind";

export default function Education({ className }: { className: string }) {
  return (
    <article className={cn("flex flex-col gap-4", className)}>
      <h3 className="font-bold text-xl">Education</h3>
      <ul className="flex flex-col gap-4">
        <li>
          <h4 className="font-semibold">
            <a
              className="hover:underline"
              href="https://maps.app.goo.gl/v7WvVNutAZLCuKGB9"
              rel="noreferrer"
              target="_blank"
            >
              Universidad Politécnica de Madrid
            </a>
          </h4>
          <p>Master of Science - MS, Artificial Intelligence</p>
        </li>
        <li>
          <h4 className="font-semibold">
            <a
              className="hover:underline"
              href="https://maps.app.goo.gl/kGEBU53uppwkbgTGA"
              rel="noreferrer"
              target="_blank"
            >
              Universitat Oberta de Catalunya
            </a>
          </h4>
          <p>Bachelor of Science - BS, Software Development</p>
        </li>
        <li>
          <h4 className="font-semibold">
            <a
              className="hover:underline"
              href="https://maps.app.goo.gl/EtRvKfMK1SEFgGqz9"
              rel="noreferrer"
              target="_blank"
            >
              Universitat de Barcelona
            </a>{" "}
            / UOC
          </h4>
          <p>Bachelor of Arts - BA, Digital Design</p>
        </li>
      </ul>
    </article>
  );
}
