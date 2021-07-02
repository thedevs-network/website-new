/** @jsx jsx */
import { Fragment } from "React";
import { jsx, Flex } from "theme-ui";

import Logo from "../Logo";
import Wave from "./Wave";

const Header = () => {
  return (
    <Fragment>
      <Flex
        sx={(theme) => ({
          position: "relative",
          background: `linear-gradient(90deg, ${theme.colors.gradientPrimary}, ${theme.colors.gradientSecondary})`,
          width: "100%",
          height: "200px",
          zIndex: 1,
          py: [2, 3, 4],
          px: [3, 4, 5, 6],
        })}
      >
        <Logo />
      </Flex>
      <Wave />
    </Fragment>
  );
};

export default Header;
