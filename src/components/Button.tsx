/** @jsx jsx */
import { jsx, Box, Link } from "theme-ui";
import { FC, ComponentProps } from "react";

import { Telegram } from "./Icons";

type SubscribeButtonProps = ComponentProps<typeof Link> & {
  path: string;
  showSubscribeText?: boolean;
  variant?: "subscribe" | "subscribeDark";
};

export const SubscribeButton: FC<SubscribeButtonProps> = ({
  path,
  children,
  showSubscribeText = true,
  variant = "subscribe",
  ...rest
}) => {
  return (
    <Link
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      sx={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        width: "auto",
        px: "20px",
        py: "6px",
        fontWeight: "body",
        letterSpacing: 0,
        fontSize: 1,
        textTransform: "uppercase",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 6,
        transition: "all 0.2s ease-in",
        ...(!showSubscribeText && { px: 3, py: 1 }),
        ":hover": {
          transform: "translateY(-2px)",

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
            ml: showSubscribeText ? 1 : 0,
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
