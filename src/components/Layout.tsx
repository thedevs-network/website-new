/** @jsx jsx */
import { Flex, jsx, ThemeUIStyleObject } from "theme-ui";
import { FC } from "react";

interface SectionProps {
  id?: string;
  styles?: ThemeUIStyleObject;
}

export const Section: FC<SectionProps> = ({ children, styles, id }) => {
  return (
    <Flex sx={{ width: "100%", justifyContent: "center", ...styles }} id={id}>
      <Flex sx={{ width: ["100%", 808], flexDirection: "column" }}>
        {children}
      </Flex>
    </Flex>
  );
};
