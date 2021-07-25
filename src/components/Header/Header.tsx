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
          pt: [1, 2, 3, 4],
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
            mt: [2, 4, 5],
            pt: [4, 0],
            pb: [4, 3, 2],
            color: "white",
            textAlign: ["center", "left"],
          }}
        >
          <Logo size={[50, 60, 70]} color="headerBigLogo" />
          <Flex
            sx={{ flexDirection: "column", ml: [0, 4, "40px"], mt: [3, 0] }}
          >
            <Heading
              as="h1"
              sx={{
                fontWeight: "body",
                color: "headerText",
                fontSize: [3, 4, 5],
              }}
            >
              The Devs
            </Heading>
            <Paragraph
              sx={{
                mt: [1, 2],
                fontWeight: "light",
                color: "headerText",
                fontSize: [0, 2],
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
