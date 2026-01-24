import { cn } from "@/lib/utils/tailwind";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function Highlights({ className }: { className: string }) {
  return (
    <Card
      className={cn(
        "flex flex-col gap-2 bg-0 px-0 font-sans text-base",
        className,
      )}
    >
      <CardHeader className="gap-0">
        <CardTitle className="">Some highlights</CardTitle>
      </CardHeader>
      <CardContent className="gap-0">
        <ul className="text-justify">
          <li>
            <span>
              • Developing a simulations dashboard for ALICE researchers to
              manage Monte Carlo methods.
            </span>
          </li>
          <li>
            <span>
              • Graduating with dual bachelor&apos;s degrees in both arts and
              science.
            </span>
          </li>
          <li>
            <span>
              • CERN Alumni,{" "}
              <a
                className="hover:underline dark:text-custom-green text-custom-red"
                href="https://app.novatalent.com/open/certificate/DQV0HEHKGL6710HYNPW4Z1ZBL"
                rel="noreferrer"
                target="_blank"
              >
                Nova
              </a>
              , creative coding, &apos;build in public&apos;...
            </span>
          </li>
          <li>
            <span>
              • Wondering what machines dream about in my master&apos;s program.
            </span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
