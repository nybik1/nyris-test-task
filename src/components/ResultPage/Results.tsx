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
    findInValues(results, router.query.name);
  }, [router.query.name]);

  const findInValues = (arr: ResultItemTypes[], value: string) => {
    if (value === "") return setResults(mockResults.results);
    value = String(value).toLowerCase();
    return setResults(() =>
      arr.filter((o: any) => fieldsForSearch.some((entry) => String(o[entry]).toLowerCase().includes(value)))
    );
  };
  const handleSearch = (value: string) => {
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
