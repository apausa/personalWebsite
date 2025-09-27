"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

export default function Picture({ src }: { src: string }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="relative w-full h-full bg-gray-200">
        <div className="absolute inset-0 bg-custom-selection mix-blend-overlay opacity-100" />
      </div>
    );
  }

  return (
    <>
      <Image
        fill
        priority
        alt="Pablo"
        src={src}
        className="
              object-cover
              h-full
              saturate-0
              group-hover:saturate-100
              transition-saturate
              duration-500
              "
      />
      <div
        className="
              absolute
              inset-0
              bg-custom-selection
              mix-blend-overlay
              opacity-100
              group-hover:opacity-0
              transition-opacity
              duration-500
              "
      />
    </>
  );
}
