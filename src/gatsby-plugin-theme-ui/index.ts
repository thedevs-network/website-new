const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    light: 300,
    body: 400,
    medium: 500,
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: ["0.05em"],
  background:
    "linear-gradient(356deg, rgba(255,255,255,1) 0%, rgba(247,238,255,0.9387955865940126) 35%, rgba(255,255,255,1) 100%);",
  colors: {
    background: "#f5f5f5",
    backgroundJobs: "#27F3F3",
    backgroundFooter: "#131313",
    gradientPrimary: "#952ae5",
    gradientSecondary: "#6469c2",
    headerLink: "rgba(233, 233, 233, 0.8)",
    headerLinkHover: "white",
    headerLogo: "rgba(233, 233, 233, 0.5)",
    headerBigLogo: "rgba(244, 244, 244, 1)",
    headerText: "white",
    text: "#4a4a4a",
    textFooter: "#959595",
    link: "#6a6a6a",
    linkHover: "#000000",
    primary: "#03A9F4",
    primaryLight: "#69D0FE",
    muted: ["#f6f6f6", "#dfdfdf", "#d2d2d2", "#d7d7d7", "#bfbfbf"],
  },
  links: {
    subscribe: {
      color: "primary",
      borderColor: "primaryLight",
      svg: { fill: "primary" },
      ":hover": {
        backgroundColor: "primary",
        color: "white",
      },
    },
    subscribeDark: {
      color: "text",
      borderColor: "text",
      svg: { fill: "text" },
      ":hover": {
        backgroundColor: "text",
        color: "white",
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      display: "inline-block",
      color: "link",
      borderWidth: 0,
      borderBottomWidth: 1,
      borderStyle: "dotted",
      borderColor: "muted.4",
      transition: "0.2s all ease",
      ":hover": {
        color: "linkHover",
        borderColor: "linkHover",
      },
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    hr: {
      borderColor: "muted.1",
      borderWidth: "1px",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
};

export default theme;
