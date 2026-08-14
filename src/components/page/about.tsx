import { ABOUT } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function Highlights() {
  return (
    <Card className={cn("gap-2 bg-0")}>
      <CardHeader className="font-bold">
        <CardTitle>About me</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {ABOUT.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </CardContent>
    </Card>
  );
}
