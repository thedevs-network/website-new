/** @jsx jsx */
import { Box, Flex, Heading, jsx, Paragraph, Divider } from "theme-ui";
import { useBreakpointIndex } from "@theme-ui/match-media";

import {
  Clipboard as ClipboardIcon,
  Lightbulb as LightbulbIcon,
  Users as UsersIcon,
} from "../components/Icons";
import { SubscribeButton } from "../components/Button";
import MainWrapper from "../components/MainWrapper";
import { Section } from "../components/Layout";
import Project from "../components/Project";
import Header from "../components/Header";
import Group from "../components/Group";
import Meta from "../components/Meta";
import { groups, projects } from "../consts";

import promoImage from "../images/telegram-placeholder.png";
import Footer from "../components/Footer";

const IndexPage = () => {
  const breakpointIndex = useBreakpointIndex();

  return (
    <MainWrapper>
      <Meta />

      <Header />

      <Section>
        <Flex
          sx={{
            flexDirection: ["column", "row"],
            justifyContent: ["flex-start", "space-between"],
            alignItems: ["center", "flex-start"],
            pl: [4, 4, 0],
            pr: [4, 4, 0],
            textAlign: ["center", "left"],
          }}
        >
          <Flex
            sx={{
              maxWidth: ["100%", "50%"],
              flex: "1 1 auto",
              flexDirection: "column",
              alignItems: ["center", "flex-start"],
              mt: ["40px"],
              pr: [0, 1],
            }}
          >
            <Heading as="h2" sx={{ fontSize: [3, 3, 4], mb: [3, 3, "40px"] }}>
              we connect developers together.
            </Heading>
            <Paragraph sx={{ fontSize: [1, 1, 2], mb: [3, 3, "40px"] }}>
              The Devs is a set of programming and design groups on Telegram
              that provides a spam-free discussion space for developers to
              communicate and connect with each other. Subscribe to our channel
              for daily development and design resources, tutorials, and news.
            </Paragraph>
            <SubscribeButton
              path="https://t.me/thedevs"
              title="The Devs Channel"
              sx={{ alignSelf: ["center", "flex-start"] }}
            />
          </Flex>
          <Flex
            sx={{
              maxWidth: ["100%", "50%"],
              flex: "1 1 auto",
              justifyContent: "flex-end",
              mt: [4, 0],
              img: { maxWidth: ["100%", "90%", "100%"] },
            }}
          >
            <img src={promoImage} />
          </Flex>
        </Flex>
      </Section>

      <Section>
        <Box sx={{ width: "100%", my: 4 }}>
          <Divider sx={{ width: "100%", px: [3, 0] }} />
        </Box>
      </Section>

      <Section>
        <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
          <UsersIcon
            sx={{ width: [32, 40], height: "auto", fill: "muted.2" }}
          />
          <Heading
            as="h2"
            sx={{ fontSize: [3, 3, 4], textAlign: "center", my: [2, 3] }}
          >
            groups.
          </Heading>
          <Paragraph
            sx={{
              fontSize: [1, 1, 2],
              textAlign: "center",
              maxWidth: "100%",
              width: "600px",
              px: [4, 3],
            }}
          >
            With each group dediated to a topic, we aim to gather developrs to
            help them chat and discuss things they love in a well moderated
            place.
          </Paragraph>
        </Flex>

        <Flex
          sx={{
            width: "100%",
            flexWrap: "wrap",
            justifyContent: "space-between",
            mt: [4, 4, 5],
            px: [4, 4, 0],
            "> div": {
              width: ["100%", "50%", "33%"],
              flex: "1 1 auto",
              mb: [2, 3, 4],
              ":nth-child(3n - 2)": { pr: [0, 0, "20px"] },
              ":nth-child(3n - 1)": { px: [0, 0, "10px"] },
              ":nth-child(3n)": { pl: [0, 0, "20px"] },
              ...(breakpointIndex === 1 && {
                ":nth-child(2n)": { pl: [0, "20px", "inherit"] },
                ":nth-child(2n - 1)": { pr: [0, "20px", "inherit"] },
              }),
              ...(groups.length % 2 !== 0 && {
                ":last-child": {
                  width: ["100%", "50%", "33%"],
                  flex: ["1 1 auto", "0 0 auto"],
                },
              }),
            },
          }}
        >
          {groups.map((group) => (
            <Group {...group} />
          ))}
        </Flex>
      </Section>

      <Section styles={{ backgroundColor: "backgroundJobs", mt: 4 }}>
        <Flex
          sx={{
            flexDirection: ["column", "row"],
            alignItems: ["center", "flex-start"],
            justifyContent: "space-between",
            textAlign: ["center", "left"],
            py: [4, 5],
            px: [4, 4, 0],
          }}
        >
          <Flex
            sx={{
              width: ["100%", "80%"],
              flexDirection: "column",
              pr: [0, 4],
              mb: [4, 0],
            }}
          >
            <Heading sx={{ fontSize: [3, 3, 4], mb: [3, 4] }}>jobs.</Heading>
            <Paragraph sx={{ fontSize: [1, 1, 2], mb: [3, 4] }}>
              Join our channel called The Hire, where you can find job
              oppurtuinites submitted by our members from across the globe.
            </Paragraph>
            <SubscribeButton
              path="https://t.me/thehire"
              title="The Hire Channel"
              variant="subscribeDark"
              sx={{ alignSelf: ["center", "flex-start"] }}
            />
          </Flex>
          <Flex sx={{ width: ["120px", "190px"] }}>
            <ClipboardIcon sx={{ width: "188px", height: "auto" }} />
          </Flex>
        </Flex>
      </Section>

      <Box sx={{ my: "5" }} />

      <Section id="projects">
        <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
          <LightbulbIcon
            sx={{ width: [32, 40], height: "auto", fill: "muted.2" }}
          />
          <Heading
            as="h2"
            sx={{ fontSize: [3, 3, 4], textAlign: "center", my: [2, 3] }}
          >
            projects.
          </Heading>
          <Paragraph
            sx={{
              fontSize: [1, 1, 2],
              textAlign: "center",
              maxWidth: "100%",
              width: "600px",
              px: [4, 3],
            }}
          >
            We are an open source community. Here’s the proof.
          </Paragraph>
        </Flex>

        <Flex
          sx={{
            justifyContent: "space-between",
            flexDirection: ["column", "row"],
            flexWrap: "wrap",
            mt: [5],
            px: [3, 3, 0, 0],
          }}
        >
          {projects.map((project) => (
            <Flex
              sx={{
                flex: "1 1 auto",
                width: ["100%", "33.33%"],
                mb: [5, 0],
                ":last-child": { mb: 0 },
              }}
            >
              <Project
                icon={project.icon}
                name={project.name}
                links={project.links}
              >
                {project.description}
              </Project>
            </Flex>
          ))}
        </Flex>
      </Section>

      <Box sx={{ my: "100px" }} />

      <Footer />
    </MainWrapper>
  );
};

export default IndexPage;
