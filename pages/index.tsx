import type { NextPage } from "next";
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
