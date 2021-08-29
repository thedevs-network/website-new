/** @jsx jsx */
import { jsx } from "theme-ui";
import { Helmet } from "react-helmet";

import ogCardImage from "../images/og-card.png";
import twitterCardImage from "../images/twitter-card.png";

const Meta = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>The Devs Network</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content="Developers Community on Telegram" />
      <meta property="og:title" content="The Devs Network" />
      <meta
        property="og:description"
        content="Developers Community on Telegram"
      />
      <meta property="og:image" content={ogCardImage} />
      <meta property="og:url" content="http://thedevs.network" />
      <meta name="twitter:title" content="The Devs Network " />
      <meta
        name="twitter:description"
        content="Developers Community on Telegram"
      />
      <meta name="twitter:image" content={twitterCardImage} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default Meta;
