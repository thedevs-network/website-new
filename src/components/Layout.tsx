/** @jsx jsx */
import { Flex, jsx, ThemeUIStyleObject } from "theme-ui";
import { FC } from "react";

interface SectionProps {
  sx?: ThemeUIStyleObject;
}

export const Section: FC<SectionProps> = ({ children, sx }) => {
  return (
    <Flex sx={{ width: "100%", justifyContent: "center", ...sx }}>
      <Flex sx={{ width: ["100%", 808], flexDirection: "column" }}>
        {children}
      </Flex>
    </Flex>
  );
};
