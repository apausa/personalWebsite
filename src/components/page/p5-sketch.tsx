/* eslint-disable consistent-return */

"use client";

import React, { useEffect, useRef } from "react";

import { useTheme } from "next-themes";

import { asciiOrb } from "@/lib/ascii-orb";

import type p5 from "p5";

export const P5Sketch = (): React.ReactElement => {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    let cancelled = false;
    let instance: p5 | null = null;

    (async () => {
      const P5 = (await import("p5")).default;

      if (cancelled || !containerRef.current) return;

      instance = new P5(asciiOrb(resolvedTheme), containerRef.current);
      p5Instance.current = instance;
    })();

    return () => {
      cancelled = true;
      instance?.remove();

      if (p5Instance.current === instance) p5Instance.current = null;
    };
  }, [resolvedTheme]);

  return React.createElement("div", {
    ref: containerRef,
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: -1,
    },
  });
};
