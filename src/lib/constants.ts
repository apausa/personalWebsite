import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
} from "@tabler/icons-react";

export const TITLE = "Pablo Apausa";

export const PAGE_URL = "https://www.apausa.dev/";

export const MAIL = "pablo@apausa.dev";

export const LOCATION = "Geneva, Switzerland";

export const DESCRIPTION =
  "Software Engineer at CERN FCC Study — Computer Graphics — MS in Artificial Intelligence";

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
  "I’m a software engineer at CERN in Geneva, where I work on computer graphics for the Future Circular Collider Study. Before that, I studied Artificial Intelligence at the Technical University of Madrid. I am primarily interested in machine learning, deep learning and computer vision.",
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
