import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Montserrat, Newsreader } from "next/font/google";

import P5Sketch from "@/components/Background";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { METADATA } from "@/lib/constants";

import "./globals.css";

import type { Metadata } from "next";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      data-theme="light"
      lang="en"
      className={`
        ${newsreader.variable}
        ${montserrat.variable}
        font-serif
        antialiased
      `}
    >
      <body
        className={`
          bg-custom-foreground
          text-custom-background
          dark:bg-custom-background
          dark:text-custom-foreground
        `}
      >
        <ThemeProvider
          disableTransitionOnChange
          attribute="class"
          defaultTheme="dark"
        >
          <Analytics />
          <SpeedInsights />
          <P5Sketch />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
