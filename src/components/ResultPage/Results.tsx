import React, { useState, useEffect } from "react";
import GridResults from "./components/GridResults/GridResults";
import InputSearch from "./components/InputSearch/InputSearch";
import mockResults from "./mockResult.json";
import { useRouter } from "next/router";
import { ResultItemTypes } from "./Types";

const fieldsForSearch = ["title", "sku", "categories"];

const Results: React.FC = () => {
  const [results, setResults] = useState<ResultItemTypes[]>(mockResults.results);
  const router = useRouter();

  useEffect(() => {
    if (router.query.value) {
      findInValues(results, router.query.value);
    }
  }, [router.query.value]);

  const findInValues = (arr: ResultItemTypes[], value: string | string[] | undefined) => {
    if (value === "") return setResults(mockResults.results);
    value = String(value).toLowerCase();
    return setResults(() =>
      arr.filter((o: any) =>
        fieldsForSearch.some((entry) => String(o[entry]).toLowerCase().includes(value!?.toString()))
      )
    );
  };
  const handleSearch = (value: string | string[] | undefined) => {
    findInValues(results, value);
  };

  return (
    <>
      <InputSearch handleSearch={handleSearch} />
      <GridResults results={results} />
    </>
  );
};

export default Results;
