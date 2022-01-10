import React from "react";
import type { NextPage } from "next";
import Results from "../src/components/ResultPage/Results";
import Layout from "../layout/Layout";

const ResultPage: NextPage = () => {
  return (
    <Layout>
      <Results />
    </Layout>
  );
};

export default ResultPage;
