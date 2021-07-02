/** @jsx jsx */
import { jsx, Box } from "theme-ui";

interface Props {
  fontSize?: number;
  color?: string;
}

const Logo = ({ fontSize, color }: Props) => {
  return (
    <Box
      sx={{
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
