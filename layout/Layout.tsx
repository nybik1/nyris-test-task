import React from "react";
import Image from "next/image";
import { Header, HeaderName } from "carbon-components-react";
import styles from "./Layout.module.scss";
import logoSVG from "../public/assets/svg/logo.svg";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header className={styles.header}>
        <HeaderName href="/" prefix="" className={styles.headerLogo}>
          <img src={logoSVG.src} />
        </HeaderName>
      </Header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
