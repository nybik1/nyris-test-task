import React, { useState, memo, useCallback } from 'react';
import { useRouter } from 'next/router';
import styles from './InputSearch.module.scss';
import FilterSvg from '../../../../../src/assets/svg/filterIcon.svg';

const InputSearch = () => {
    const [value, setValue] = useState('');
    const router = useRouter();

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
        (e) => {
            setValue(e.target.value);
        },
        [setValue]
    );

    const handleSubmit = useCallback(
        (e: React.SyntheticEvent) => {
            e.preventDefault();
            router.push(`/search/?value=${value}`);
        },
        [value, router]
    );

    return (
        <div className={styles.inputWrapper}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    value={value}
                    onChange={handleChange}
                    placeholder="Search in Trumpf catalogue"
                />
                <button type="button" className={styles.buttonFilter}>
                    <FilterSvg />
                </button>
            </form>
        </div>
    );
};

export default memo(InputSearch);
