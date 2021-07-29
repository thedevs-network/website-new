/** @jsx jsx */
import { jsx, Box, Link } from "theme-ui";
import { FC, ComponentProps } from "react";

import { Telegram } from "./Icons";

type SubscribeButtonProps = ComponentProps<typeof Link> & {
  path: string;
  showSubscribeText?: boolean;
};

export const SubscribeButton: FC<SubscribeButtonProps> = ({
  path,
  children,
  showSubscribeText = true,
  ...rest
}) => {
  return (
    <Link
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      variant="subscribe"
      sx={{
        ":hover": {
          "svg.main": {
            transform: "translateY(-30px)",
          },
          "svg.hovered": {
            transform: "translateY(0px)",
          },
        },
      }}
      {...rest}
    >
      + {showSubscribeText ? "Subscribe" : ""}
      <Box
        sx={{
          width: 18,
          height: 18,
          position: "relative",
          svg: {
            position: "absolute",
            top: 0,
            left: 0,
            width: 18,
            height: 18,
            ml: 1,
            transition: "all 0.3s ease-in",
          },
          ".hovered": {
            fill: "white",
            transform: "translateY(24px)",
          },
        }}
      >
        <Telegram className="main" />
        <Telegram className="hovered" />
      </Box>
    </Link>
  );
};
