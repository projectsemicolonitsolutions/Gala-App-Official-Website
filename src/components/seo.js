import React from "react";
import { Helmet } from "react-helmet";

import logo512 from "../assets/meta/logo512.png";
import logo192 from "../assets/meta/logo192.png";
import favicon from "../assets/meta/favicon.ico";

const Seo = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{`Gala App${title ? ` | ${title}` : ``}`}</title>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Project Semicolon" />
        <link rel="apple-touch-icon" sizes="512x512" href={logo512} />
        <link rel="apple-touch-icon" sizes="192x192" href={logo192} />
        <link rel="icon" href={favicon} />
      </Helmet>
    </>
  );
};

export default Seo;
