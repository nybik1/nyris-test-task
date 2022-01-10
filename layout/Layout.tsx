import React from "react";
import Image from "next/image";
import { Header, HeaderName } from "carbon-components-react";
import styles from "./Layout.module.scss";
import LogoSVG from "../src/assets/svg/logo.svg";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header className={styles.header} aria-label="">
        <HeaderName href="/" prefix="" className={styles.headerLogo}>
          <LogoSVG />
        </HeaderName>
      </Header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
