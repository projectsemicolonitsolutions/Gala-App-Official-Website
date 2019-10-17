import React from "react";
import Header from "./header";
import Footer from "./footer";
import Seo from "./seo";

const Layout = ({ children, title }) => {
  return (
    <>
      <Seo title={title} />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
