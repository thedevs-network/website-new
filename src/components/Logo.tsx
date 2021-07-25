/** @jsx jsx */
import { jsx, Box } from "theme-ui";

interface Props {
  size?: number | number[];
  color?: string;
  display?: string | string[];
}

const Logo = ({ size = 25, color, display }: Props) => {
  return (
    <Box
      sx={{
        display,
        height: size,
        width: size,
        letterSpacing: 0,
        fontWeight: "body",
      }}
      // TODO: label
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 76 62"
        xmlns="http://www.w3.org/2000/svg"
        sx={{ fill: color }}
      >
        <path d="M7.53906 61.8828H0.078125L22.4609 0.125H29.9219L7.53906 61.8828ZM53.4922 61.8828H46.0312L68.4141 0.125H75.875L53.4922 61.8828Z" />
      </svg>
    </Box>
  );
};

export default Logo;
