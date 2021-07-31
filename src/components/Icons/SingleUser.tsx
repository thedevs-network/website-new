/** @jsx jsx */
import { ComponentProps } from "react";
import { jsx } from "theme-ui";

function SingleUser(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="13"
      fill="none"
      viewBox="0 0 12 13"
      {...props}
    >
      <path
        fill="#D7D7D7"
        fillRule="evenodd"
        d="M6 5.143A2.571 2.571 0 106 0a2.571 2.571 0 000 5.143zm-6 7.714a6 6 0 0112 0H0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default SingleUser;
