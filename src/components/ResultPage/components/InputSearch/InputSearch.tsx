import React, { useState } from "react";
import styles from "./InputSearch.module.scss";
import { useRouter } from "next/router";

const InputSearch = () => {
  const router = useRouter();
  const [value, setValue] = useState(router.query.name);

  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.input}
        placeholder="Search in Trumpf catalogue"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button className={styles.buttonShare} disabled={!value}>
        share svg
      </button>
      <button className={styles.buttonClear} onClick={() => setValue("")}>
        X
      </button>
    </div>
  );
};

export default InputSearch;
