/** @jsx jsx */
import { ComponentProps } from "react";
import { jsx } from "theme-ui";

function ProjectTgdr(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="108"
      height="78"
      fill="none"
      viewBox="0 0 108 78"
      {...props}
    >
      <circle cx="20" cy="17" r="15" fill="#E2E2E2"></circle>
      <rect width="64" height="8" x="44" y="5" fill="#E2E2E2" rx="4"></rect>
      <rect width="30" height="8" x="44" y="20" fill="#E2E2E2" rx="4"></rect>
      <path
        fill="#E2E2E2"
        stroke="#CBCBCB"
        d="M7.725 11.374l-.233-.123-.232.123-3.733 1.962.713-4.157.044-.26-.188-.183-3.021-2.943 4.173-.607.26-.038.117-.235L7.492 1.13 9.36 4.913l.117.235.26.038 4.174.607-3.021 2.943-.188.184.044.26.714 4.156-3.734-1.962z"
      ></path>
      <circle cx="20" cy="63" r="15" fill="#E2E2E2"></circle>
      <rect width="64" height="8" x="44" y="51" fill="#E2E2E2" rx="4"></rect>
      <rect width="30" height="8" x="44" y="66" fill="#E2E2E2" rx="4"></rect>
      <path
        fill="#E2E2E2"
        stroke="#CBCBCB"
        d="M7.725 57.374l-.233-.123-.232.123-3.733 1.962.713-4.157.044-.26-.188-.183-3.021-2.943 4.173-.607.26-.038.117-.235 1.867-3.783 1.867 3.782.117.236.26.038 4.174.607-3.021 2.943-.188.184.044.26.714 4.156-3.734-1.962z"
      ></path>
    </svg>
  );
}

export default ProjectTgdr;
