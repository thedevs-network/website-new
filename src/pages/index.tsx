/** @jsx jsx */
import { Box, Flex, Heading, jsx, Paragraph, Divider } from "theme-ui";

import promoImage from "../images/telegram-placeholder.png";
import { Users as UsersIcon } from "../components/Icons";
import { SubscribeButton } from "../components/Button";
import MainWrapper from "../components/MainWrapper";
import { Section } from "../components/Layout";
import Header from "../components/Header";

const IndexPage = () => {
  return (
    <MainWrapper>
      <Header />

      <Section>
        <Flex sx={{ justifyContent: "space-between" }}>
          <Flex
            sx={{
              maxWidth: ["50%"],
              flex: "1 1 auto",
              flexDirection: "column",
              mt: ["40px"],
              pr: [1],
            }}
          >
            <Heading as="h2">we connect developers together.</Heading>
            <Box sx={{ mb: ["40px"] }} />
            <Paragraph>
              The Devs is a set of coding and design groups on Telegram which
              allows developers to communicate with each other freely and
              safely. Subscribe to our channel for daily development resources,
              tutorials and news.
            </Paragraph>
            <Box sx={{ mb: ["40px"] }} />
            <SubscribeButton
              path="https://t.me/thedevs"
              sx={{ alignSelf: "flex-start" }}
            />
          </Flex>
          <Flex
            sx={{
              maxWidth: ["50%"],
              flex: "1 1 auto",
              justifyContent: "flex-end",
            }}
          >
            <img src={promoImage} />
          </Flex>
        </Flex>
      </Section>

      <Section>
        <Box sx={{ width: "100%", my: 4 }}>
          <Divider sx={{ width: "100%" }} />
        </Box>
      </Section>

      <Section>
        <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
          <UsersIcon sx={{ width: 40, height: "auto", fill: "muted.2" }} />
          <Heading as="h2" sx={{ textAlign: "center", my: 3 }}>
            groups.
          </Heading>
          <Paragraph
            sx={{ textAlign: "center", maxWidth: "90%", width: "600px" }}
          >
            With each group dediated to a topic, we aim to gather developrs to
            help them chat and discuss things they love in a well moderated
            place.
          </Paragraph>
        </Flex>
      </Section>

      <Box sx={{ mb: 8 }} />
    </MainWrapper>
  );
};

export default IndexPage;
