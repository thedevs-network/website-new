/** @jsx jsx */
import { ComponentProps } from "react";
import { jsx } from "theme-ui";

function Users(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        fill="#D2D2D2"
        d="M23.4 10.8a5.4 5.4 0 11-10.8 0 5.4 5.4 0 0110.8 0zm9 3.6a3.6 3.6 0 11-7.2 0 3.6 3.6 0 017.2 0zM25.2 27a7.2 7.2 0 00-14.4 0v5.4h14.4V27zM10.8 14.4a3.6 3.6 0 11-7.2 0 3.6 3.6 0 017.2 0zm18 18V27a10.75 10.75 0 00-1.35-5.23A5.41 5.41 0 0134.2 27v5.4h-5.4zM8.55 21.77c-.888 1.6-1.353 3.4-1.35 5.23v5.4H1.8V27a5.4 5.4 0 016.75-5.23z"
      ></path>
    </svg>
  );
}

export default Users;
