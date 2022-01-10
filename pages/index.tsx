import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import { Button } from "carbon-components-react";
import Layout from "../layout/Layout";
import MainPage from "../src/components/MainPage/MainPage";

const Home: NextPage = () => {
  return (
    <Layout>
      <MainPage />
    </Layout>
  );
};

export default Home;
