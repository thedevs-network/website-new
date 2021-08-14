/** @jsx jsx */
import { ComponentProps } from "react";
import { jsx } from "theme-ui";

function Link(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <g stroke="#747474" strokeLinecap="square" clipPath="url(#clip0)">
        <path d="M6.667 8.666a3.333 3.333 0 005.026.36l2-2A3.333 3.333 0 008.98 2.312l-1.147 1.14"></path>
        <path d="M9.333 7.332a3.333 3.333 0 00-5.026-.36l-2 2a3.333 3.333 0 004.713 4.714l1.14-1.14"></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path
            fill="#fff"
            d="M0 0H16V16H0z"
            transform="translate(0 -.001)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Link;
