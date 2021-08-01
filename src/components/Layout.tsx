/** @jsx jsx */
import { Flex, jsx, ThemeUIStyleObject } from "theme-ui";
import { FC } from "react";

interface SectionProps {
  styles?: ThemeUIStyleObject;
}

export const Section: FC<SectionProps> = ({ children, styles }) => {
  return (
    <Flex sx={{ width: "100%", justifyContent: "center", ...styles }}>
      <Flex sx={{ width: ["100%", 808], flexDirection: "column" }}>
        {children}
      </Flex>
    </Flex>
  );
};
