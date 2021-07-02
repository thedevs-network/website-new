/** @jsx jsx */
import { Fragment } from "React";
import { jsx, Flex, Heading, Paragraph } from "theme-ui";

import Logo from "../Logo";
import Wave from "./Wave";
import { Menu, MenuItem } from "./styled";

const menuItems = [
  {
    title: "join",
    path: "join",
  },
  {
    title: "projects",
    path: "projects",
  },
  {
    title: "github",
    path: "github",
  },
  {
    title: "contact",
    path: "contact",
  },
];

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
          py: [2, 3, 4],
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
          <Logo display={["none", "block"]} />

          <Menu>
            {menuItems.map((item) => (
              <MenuItem key={item.path}>
                <a href={item.path}>{item.title}</a>
              </MenuItem>
            ))}
          </Menu>
        </Flex>

        {/* Logo and Name */}
        <Flex
          sx={{
            flexDirection: ["column", "row"],
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
            color: "white",
            textAlign: ["center", "left"],
          }}
        >
          <Logo size={80} color="white" />

          <Flex sx={{ flexDirection: "column", marginLeft: ["0", "25px"] }}>
            <Heading as="h1" sx={{ fontWeight: "500" }}>
              The Devs
            </Heading>

            <Paragraph sx={{ marginTop: "15px", fontWeight: "300" }}>
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
