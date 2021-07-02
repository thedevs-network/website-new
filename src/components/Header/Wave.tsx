/** @jsx jsx */
import { useTheme } from "@emotion/react";
import { jsx, Box, SxProp } from "theme-ui";

const Wave = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        transform: ["translateY(-20px)", "translateY(-100px)"],
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 1440 400"
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="5%" stopColor={theme.colors.gradientSecondary}></stop>
            <stop offset="95%" stopColor={theme.colors.gradientPrimary}></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          strokeWidth="0"
          d="M0 400V200c117.357 16.464 234.714 32.929 364 27 129.286-5.929 270.5-34.25 373-50s166.286-18.929 277-13c110.714 5.929 268.357 20.964 426 36v200z"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
    </Box>
  );
};

export default Wave;
