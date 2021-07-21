/** @jsx jsx */
import { Fragment } from "React";
import { jsx, Flex, Heading, Paragraph } from "theme-ui";

import Logo from "../Logo";
import Wave from "./Wave";
import Menu from "./Menu";

const Header = () => {
  return (
    <Fragment>
      <Flex
        sx={(theme) => ({
          flexDirection: "column",
          position: "relative",
          background: `linear-gradient(90deg, ${theme.colors.gradientPrimary}, ${theme.colors.gradientSecondary})`,
          width: "100%",
          height: "auto",
          zIndex: 1,
          pt: [2, 3, 4],
          px: [3, 4, 5, 6],
        })}
      >
        {/* Topbar */}
        <Flex
          sx={{
            justifyContent: ["center", "space-between"],
            alignItems: "center",
          }}
        >
          <Logo display={["none", "block"]} color="headerLogo" />
          <Menu />
        </Flex>

        {/* Logo and Name */}
        <Flex
          sx={{
            flexDirection: ["column", "row"],
            justifyContent: "center",
            alignItems: "center",
            mt: 5,
            color: "white",
            textAlign: ["center", "left"],
          }}
        >
          <Logo size={80} color="headerBigLogo" />

          <Flex sx={{ flexDirection: "column", ml: [0, 5] }}>
            <Heading
              as="h1"
              sx={{
                fontWeight: "body",
                color: "headerText",
                fontSize: "36px",
              }}
            >
              The Devs
            </Heading>

            <Paragraph
              sx={{
                mt: 2,
                fontWeight: "body",
                color: "headerText",
                fontSize: 2,
              }}
            >
              developers community on Telegram
            </Paragraph>
          </Flex>
        </Flex>
      </Flex>
      <Wave />
    </Fragment>
  );
};

export default Header;
