import React, { useState, useEffect, useCallback } from 'react';
import GridResults from './components/GridResults/GridResults';
import InputSearch from './components/InputSearch/InputSearch';
import mockResults from './mocks/mockResult.json';
import { useRouter } from 'next/router';
import { ResultItemTypes } from './types';
import filterByValue from '../../../utils/filterByValue';

const Results: React.FC = () => {
    const [results, setResults] = useState<ResultItemTypes[]>(mockResults.results);
    const router = useRouter();

    useEffect(() => {
        if (router.query.value) {
            findInValues(results, router.query.value);
        }
    }, [router.query.value, results]);

    const findInValues = (arr: ResultItemTypes[], value: string | string[] | undefined) => {
        if (value === '') return setResults(mockResults.results);
        const preparedValue = String(value).toLowerCase();
        return setResults(() => filterByValue(arr, preparedValue));
    };
    const handleSearch = useCallback(
        (value: string | string[] | undefined) => {
            findInValues(mockResults.results, value);
            router.replace(
                {
                    pathname: router.pathname,
                    query: {
                        value
                    }
                },
                undefined,
                {
                    shallow: true
                }
            );
        },
        [router]
    );

    return (
        <>
            <InputSearch handleSearch={handleSearch} />
            <GridResults results={results} />
        </>
    );
};

export default Results;
