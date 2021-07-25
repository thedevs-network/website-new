/** @jsx jsx */
import { jsx, Flex } from "theme-ui";

const ITEMS = [
  {
    text: "projects",
    path: "projects",
  },
  {
    text: "github",
    path: "github",
    newTab: true,
  },
  {
    text: "contact",
    path: "contact",
  },
];

const Menu = () => {
  return (
    <Flex as="ul" m={0} p={0} sx={{ listStyle: "none" }}>
      {ITEMS.map((item) => (
        <Flex
          key={item.text}
          as="li"
          sx={{
            fontSize: [0, 1, 2],
            alignItems: "center",
            color: "headerLink",
            a: {
              transition: "color 0.3s ease",
              color: "headerLink",
            },
            ":hover": {
              a: {
                color: "headerLinkHover",
              },
            },
            "&:not(:last-child)": {
              mr: 3,
            },
            "&:not(:first-child)": {
              "&:before": {
                display: "block",
                fontSize: "1.5em",
                content: '"·"',
                mr: 3,
              },
            },
          }}
        >
          <a
            href={item.path}
            target={item.newTab ? "_blank" : "_self"}
            rel={item.newTab ? "noopener noreferrer" : ""}
          >
            {item.text}
          </a>
        </Flex>
      ))}
    </Flex>
  );
};

export default Menu;
