import { ResultItemTypes } from '../src/components/ResultPage/types';

const fieldsForSearch = ['title', 'sku', 'categories'];

const filterByValue = (arr: ResultItemTypes[], preparedValue: string) => {
    return arr.filter((item: ResultItemTypes) =>
        fieldsForSearch.some((fieldName) => String(item[fieldName]).toLowerCase().includes(preparedValue!?.toString()))
    );
};

export default filterByValue;
