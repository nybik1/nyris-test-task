import React, { useState, memo } from "react";
import { useRouter } from "next/router";
import styles from "./InputSearch.module.scss";
import FilterSvg from "../../../../../src/assets/svg/filterIcon.svg";

const InputSearch = () => {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    router.push(`/search/?value=${value}`);
  };

  return (
    <div className={styles.inputWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          value={value}
          onChange={handleSearch}
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
