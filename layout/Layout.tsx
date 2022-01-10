import React from "react";
import { Header, HeaderName } from "carbon-components-react";
import styles from "./Layout.module.scss";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header className={styles.header}>
        <HeaderName href="/" prefix="" className={styles.headerLogo}>
          nyris
        </HeaderName>
      </Header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
