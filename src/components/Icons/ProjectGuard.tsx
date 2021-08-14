/** @jsx jsx */
import { ComponentProps } from "react";
import { jsx } from "theme-ui";

function ProjectGuard(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="123"
      height="80"
      fill="none"
      viewBox="0 0 123 80"
      {...props}
    >
      <path
        fill="#E2E2E2"
        d="M36.497 16.073L61 6.883l24.503 9.19a3.333 3.333 0 012.164 3.12V33.55a36.73 36.73 0 01-12.544 27.64L61 73.55 46.877 61.19a36.73 36.73 0 01-12.544-27.64V19.193a3.333 3.333 0 012.164-3.12z"
      ></path>
      <rect width="22" height="5" y="22" fill="#EDEDED" rx="2.5"></rect>
      <rect width="22" height="5" x="90" y="53" fill="#EDEDED" rx="2.5"></rect>
      <rect width="12" height="5" x="98" y="18" fill="#EDEDED" rx="2.5"></rect>
      <rect width="28" height="5" x="95" y="31" fill="#EDEDED" rx="2.5"></rect>
      <rect width="15" height="5" x="98" y="42" fill="#EDEDED" rx="2.5"></rect>
      <rect width="23" height="5" x="5" y="34" fill="#EDEDED" rx="2.5"></rect>
      <rect width="21" height="5" x="2" y="46" fill="#EDEDED" rx="2.5"></rect>
      <rect width="19" height="5" x="13" y="56" fill="#EDEDED" rx="2.5"></rect>
    </svg>
  );
}

export default ProjectGuard;
