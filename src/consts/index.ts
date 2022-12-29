import JavaScript from "../images/javascript.jpg";
import Python from "../images/python.jpg";
import Java from "../images/java.jpg";
import PHP from "../images/php.jpg";
import Linux from "../images/linux.jpg";
import Android from "../images/android.jpg";
import DevsChat from "../images/devschat.jpg";
import CPlusPlus from "../images/cplusplus.jpg";
import DevOps from "../images/devops.jpg";
import Design from "../images/design.jpg";
import Go from "../images/go.jpg";
import CSharp from "../images/csharp.jpg";
import GameDevelopment from "../images/gamedevelopment.jpg";
import Rust from "../images/rust.jpg";
import Zig from "../images/zig.jpg";

import { linkIcons, projectIcons as projectIcons } from "../components/Project";

export const menu = [
  {
    text: "projects",
    path: "#projects",
  },
  {
    text: "github",
    path: "https://github.com/thedevs-network",
    newTab: true,
  },
  {
    text: "contact",
    path: "mailto:hi@pouria.dev",
  },
];

export const groups: {
  title: string;
  members: number;
  image: any;
  path: string;
}[] = [
  {
    title: "JavaScript",
    members: 5700,
    image: JavaScript,
    path: "https://t.me/thedevs_js",
  },
  {
    title: "Python",
    members: 5400,
    image: Python,
    path: "https://t.me/thedevs_python",
  },
  {
    title: "Go",
    members: 1500,
    image: Go,
    path: "https://t.me/thedevs_go",
  },
  {
    title: "Rust",
    members: 550,
    image: Rust,
    path: "https://t.me/thedevs_rust",
  },
  {
    title: "Zig",
    members: 70,
    image: Zig,
    path: "https://t.me/thedevs_zig",
  },
  {
    title: "Design",
    members: 2700,
    image: Design,
    path: "https://t.me/thedevs_design",
  },
  {
    title: "Devs Chat",
    members: 3000,
    image: DevsChat,
    path: "https://t.me/thedevs_chat",
  },
  {
    title: "Java",
    members: 4100,
    image: Java,
    path: "https://t.me/thedevs_java",
  },
  {
    title: "Linux",
    members: 3700,
    image: Linux,
    path: "https://t.me/thedevs_linux",
  },
  {
    title: "PHP",
    members: 3600,
    image: PHP,
    path: "https://t.me/thedevs_php",
  },
  {
    title: "C / C++",
    members: 3400,
    image: CPlusPlus,
    path: "https://t.me/thedevs_c",
  },
  {
    title: "DevOps",
    members: 3300,
    image: DevOps,
    path: "https://t.me/thedevs_devops",
  },
  {
    title: "C#",
    members: 2000,
    image: CSharp,
    path: "https://t.me/thedevs_csharp",
  },
  {
    title: "Android",
    members: 3400,
    image: Android,
    path: "https://t.me/joinchat/AAAAAEFs51MT1z2bWDhZBQ",
  },
  {
    title: "Game Development",
    members: 1100,
    image: GameDevelopment,
    path: "https://t.me/joinchat/BkBvqUTxcmvTpm7bSZyx9g",
  },
];

interface Project {
  icon: keyof typeof projectIcons;
  name: string;
  description: string;
  links: {
    text: string;
    title: string;
    icon: keyof typeof linkIcons;
    path: string;
  }[];
}

export const projects: Project[] = [
  {
    icon: "kutt",
    name: "Kutt",
    description:
      "A modern URL shortener with support for custom domains, managing links, stats and more.",
    links: [
      { text: "Website", title: "Kutt", icon: "link", path: "https://kutt.it" },
      {
        text: "GitHub",
        title: "Kutt source code on GitHub",
        icon: "github",
        path: "https://github.com/thedevs-network/kutt",
      },
    ],
  },
  {
    icon: "guard",
    name: "The Guard Bot",
    description:
      "A Telegram bot made to help administrators to moderate groups and keep them spam-free.",
    links: [
      {
        text: "Telegram",
        title: "The Devs Bot",
        icon: "link",
        path: "https://t.me/thedevs_bot",
      },
      {
        text: "GitHub",
        title: "The Guard Bot source code on GitHub",
        icon: "github",
        path: "https://github.com/TheDevs-Network/the-guard-bot",
      },
    ],
  },
  {
    icon: "tgdr",
    name: "Telegram Directory",
    description:
      "Discover the content you love on Telegram by browsing top, hot and new channels, bots and groups.",
    links: [
      {
        text: "Website",
        title: "Telegram Directory",
        icon: "link",
        path: "https://tgdr.io/",
      },
      {
        text: "GitHub",
        title: "Telegram Directory source code on GitHub",
        icon: "github",
        path: "https://github.com/thedevs-network/tgdr",
      },
    ],
  },
];
