import { cn } from "@/lib/utils/tailwind";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function Highlights({ className }: { className: string }) {
  return (
    <Card className={cn("flex flex-col gap-2 bg-0 px-0", className)}>
      <CardHeader className="font-bold gap-0">
        <CardTitle>Some highlights</CardTitle>
      </CardHeader>
      <CardContent className="gap-0">
        <ul className="list-disc list-inside">
          <li>
            <span>
              <a
                className="text-custom-red dark:text-custom-green no-underline hover:underline"
                href="https://www.linkedin.com/in/apausa/overlay/projects/1615443083/multiple-media-viewer/?profileId=ACoAAC6iOaEBR0LVtIZMoshXghrBr3oUTrDjBRY&treasuryMediaId=1757269895901"
                rel="noreferrer"
                target="_blank"
              >
                Helping ALICE researchers manage Monte Carlo methods.
              </a>
            </span>
          </li>
          <li>
            <span>
              Graduating with dual bachelor&apos;s degrees in both arts and
              science.
            </span>
          </li>
          <li>
            <span>
              CERN Alumni,{" "}
              <a
                className="text-custom-red dark:text-custom-green no-underline hover:underline"
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
              Wondering what machines dream about in my master&apos;s program.
            </span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
