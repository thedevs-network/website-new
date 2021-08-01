/** @jsx jsx */
import { Box, Flex, Heading, jsx, Paragraph, Divider } from "theme-ui";
import { useBreakpointIndex } from "@theme-ui/match-media";

import { Clipboard, Users as UsersIcon } from "../components/Icons";
import { SubscribeButton } from "../components/Button";
import MainWrapper from "../components/MainWrapper";
import { Section } from "../components/Layout";
import Header from "../components/Header";
import Group from "../components/Group";
import { groups } from "../consts";

import promoImage from "../images/telegram-placeholder.png";

const IndexPage = () => {
  const breakpointIndex = useBreakpointIndex();

  return (
    <MainWrapper>
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
              The Devs is a set of coding and design groups on Telegram which
              allows developers to communicate with each other freely and
              safely. Subscribe to our channel for daily development resources,
              tutorials and news.
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
              path="#"
              title="The Hire Channel"
              variant="subscribeDark"
              sx={{ alignSelf: ["center", "flex-start"] }}
            />
          </Flex>
          <Flex sx={{ width: ["120px", "200px"] }}>
            <Clipboard sx={{ width: "198px", height: "auto" }} />
          </Flex>
        </Flex>
      </Section>

      <Box sx={{ mb: 8 }} />
    </MainWrapper>
  );
};

export default IndexPage;
