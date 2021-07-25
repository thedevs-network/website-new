/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import { FC, ComponentProps } from "react";

type SubscribeButtonProps = ComponentProps<typeof Link> & { path: string };

export const SubscribeButton: FC<SubscribeButtonProps> = ({
  path,
  children,
  ...rest
}) => {
  return (
    <Link
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      variant="subscribe"
      {...rest}
    >
      {children}
    </Link>
  );
};
