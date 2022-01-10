import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./InputSearch.module.scss";

const InputSearch = () => {
  const [value, setValue] = useState("");
  const router = useRouter();
  return (
    <div className={styles.inputWrapper}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`/${value}`);
        }}
      >
        <input
          className={styles.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search in Trumpf catalogue"
        />
        <button className={styles.buttonFilter}>filter svg</button>
      </form>
    </div>
  );
};

export default InputSearch;
