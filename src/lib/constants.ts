import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
} from "@tabler/icons-react";

export const TITLE = "Pablo Apausa";

export const PAGE_URL = "https://www.apausa.dev/";

export const DESCRIPTION =
  "Software Engineer at CERN FCC Study — MS in Artificial Intelligence — Computer Graphics";

export const METADATA = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: TITLE,
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/74920898", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
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
];

export const SPOTIFY_URL_TOKEN = "https://accounts.spotify.com/api/token";

export const SPOTIFY_URL_PLAYER =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";
