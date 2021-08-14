/** @jsx jsx */
import { Flex, Heading, jsx, Paragraph, Link } from "theme-ui";
import { FC } from "react";

import {
  Link as LinkIcon,
  GitHub as GitHubIcon,
  ProjectGuard,
  ProjectKutt,
  ProjectTgdr,
} from "./Icons";

export const projectIcons = {
  kutt: <ProjectKutt />,
  guard: <ProjectGuard />,
  tgdr: <ProjectTgdr />,
};

export const linkIcons = {
  link: <LinkIcon />,
  github: <GitHubIcon />,
};

interface Props {
  icon: keyof typeof projectIcons;
  name: string;
  links: {
    text: string;
    title: string;
    icon: keyof typeof linkIcons;
    path: string;
  }[];
}

const Project: FC<Props> = (props) => {
  return (
    <Flex sx={{ width: "100%", flexDirection: "column" }}>
      <Flex
        sx={{
          width: "100%",
          justifyContent: "center",
          svg: {
            maxWidth: [180],
            maxHeight: [82],
          },
        }}
      >
        {projectIcons[props.icon]}
      </Flex>
      <Heading as="h3" sx={{ fontSize: ["18px"], mt: "54px" }}>
        {props.name}
      </Heading>
      <Paragraph sx={{ fontSize: ["15px"], mt: [3], pr: 3 }}>
        {props.children}
      </Paragraph>
      <Flex>
        {props.links.map((link) => (
          <Flex
            sx={{
              alignItems: "center",
              alignSelf: "flex-start",
              mt: 3,
              mr: 3,
              svg: { maxWidth: ["16px"], maxHeight: ["16px"], mr: 2 },
            }}
          >
            {linkIcons[link.icon]}
            <Link
              href={link.path}
              target="_blank"
              rel="noopener noreferrer"
              title={link.title}
              sx={{ fontSize: ["15px"] }}
            >
              {link.text}
            </Link>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Project;
