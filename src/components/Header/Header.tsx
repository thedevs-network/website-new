/** @jsx jsx */
import { Fragment } from "React";
import { jsx, Flex } from "theme-ui";

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
          justifyContent: "space-between",
          position: "relative",
          background: `linear-gradient(90deg, ${theme.colors.gradientPrimary}, ${theme.colors.gradientSecondary})`,
          width: "100%",
          height: "auto",
          zIndex: 1,
          py: [2, 3, 4],
          px: [3, 4, 5, 6],
        })}
      >
        <Logo />

        <Menu>
          {menuItems.map((item) => (
            <MenuItem key={item.path}>{item.title}</MenuItem>
          ))}
        </Menu>
      </Flex>
      <Wave />
    </Fragment>
  );
};

export default Header;
