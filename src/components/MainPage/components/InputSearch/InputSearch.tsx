import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./InputSearch.module.scss";
import FilterSvg from "../../../../../src/assets/svg/filterIcon.svg";

const InputSearch = () => {
  const [value, setValue] = useState("");
  const router = useRouter();

  return (
    <div className={styles.inputWrapper}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`/search/?value=${value}`);
        }}
      >
        <input
          className={styles.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search in Trumpf catalogue"
        />
        <button type="button" className={styles.buttonFilter}>
          <FilterSvg />
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
