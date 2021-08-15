import * as React from "react";

const Email = ({ params }) => {
  if (params.email) {
    window.location.href = `mailto:${params.email}`;
  }

  return (
    <p>
      Redirecting to mail app to contact{" "}
      <a
        href={`mailto:${params.email}`}
        title="email link"
        rel="noopener noreferrer"
      >
        {params.email}
      </a>
    </p>
  );
};

export default Email;
