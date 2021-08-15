/** @jsx jsx */
import { jsx, Box, Link, Flex, Paragraph } from "theme-ui";
import { Section } from "./Layout";
import Logo from "./Logo";

const Footer = () => {
  return (
    <Section styles={{ backgroundColor: "backgroundFooter" }}>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "center",
          py: 5,
        }}
      >
        <Logo size={28} color="textFooter" />
        <Paragraph sx={{ fontSize: [1], color: "textFooter", mt: 3 }}>
          © {new Date().getFullYear()} - The Devs Network
        </Paragraph>
      </Flex>
    </Section>
  );
};

export default Footer;
