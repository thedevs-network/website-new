/** @jsx jsx */
import { Box, Flex, Heading, jsx, Paragraph } from "theme-ui";

import promoImage from "../images/telegram-placeholder.png";
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
            >
              + Subscribe
            </SubscribeButton>
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
    </MainWrapper>
  );
};

export default IndexPage;
