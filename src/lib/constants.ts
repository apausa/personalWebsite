import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
} from "@tabler/icons-react";

export const TITLE = "Pablo Apausa";

export const DESCRIPTION =
  "Software Engineer at CERN — MS in Artificial Intelligence";

export const METADATA = {
  title: TITLE,
  description: DESCRIPTION,
};

export const LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/apausa/",
    icon: IconBrandLinkedinFilled,
  },
  {
    name: "GitHub",
    href: "https://github.com/apausa",
    icon: IconBrandGithubFilled,
  },
];

export const SPOTIFY_URL_TOKEN = "https://accounts.spotify.com/api/token";

export const SPOTIFY_URL_PLAYER =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";
