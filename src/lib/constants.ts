import {
  IconBookmark,
  IconBrandGithubFilled,
  IconBrandHackerrank,
  IconBrandLinkedinFilled,
} from "@tabler/icons-react";

export const TITLE = "Pablo Apausa";

export const DESCRIPTION =
  "Software Engineer at CERN FCC Study — MS in Artificial Intelligence";

export const METADATA = {
  title: TITLE,
  description: DESCRIPTION,
};

export const ABOUT = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
];

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
  {
    name: "HackerRank",
    href: "https://www.hackerrank.com/profile/apausa",
    icon: IconBrandHackerrank,
  },
];

export const SPOTIFY_URL_TOKEN = "https://accounts.spotify.com/api/token";

export const SPOTIFY_URL_PLAYER =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";
