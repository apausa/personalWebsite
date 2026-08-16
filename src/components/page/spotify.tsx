import { useEffect, useState } from "react";

import { IconBrandSpotifyFilled } from "@tabler/icons-react";
import axios from "axios";

import { cn } from "@/lib/utils";

import type { Response } from "@/lib/types";

export function Spotify() {
  const [recentlyPlayed, setRecentlyPlayed] = useState<Response>({
    error: "Loading song...",
  });

  const fetchRecentlyPlayed = async () => {
    const response = await axios.get("/api/spotify");
    setRecentlyPlayed(response.data);
  };

  useEffect(() => {
    fetchRecentlyPlayed();
  }, []);

  return (
    <p className={cn("min-w-0 break-words")}>
      <IconBrandSpotifyFilled className="w-4 h-4 inline-block mr-2" />
      Last played •{" "}
      {"error" in recentlyPlayed ? (
        <span>{recentlyPlayed.error}</span>
      ) : (
        <a
          className="hover:underline dark:text-custom-green text-custom-red break-words animate-pulse"
          href={recentlyPlayed?.link}
          rel="noreferrer"
          target="_blank"
        >
          {recentlyPlayed?.name}
        </a>
      )}
    </p>
  );
}
