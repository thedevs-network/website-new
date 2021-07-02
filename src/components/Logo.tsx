/** @jsx jsx */
import { jsx, Box, ThemeUIStyleObject } from "theme-ui";

interface Props {
  display?: string | string[];
  fontSize?: number;
  color?: string;
}

const Logo = ({ fontSize, color, display }: Props) => {
  return (
    <Box
      sx={{
        display,
        color: color || "rgba(255, 255, 255, 0.5)",
        fontSize: fontSize || 4,
        letterSpacing: 0,
        fontWeight: "body",
      }}
      as="p"
      // TODO: label
    >
      //
    </Box>
  );
};

export default Logo;
