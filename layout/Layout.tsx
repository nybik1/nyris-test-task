import React from "react";
import Header from "../src/components/Header/Header";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
