import React from "react";
import styles from "./InputSearch.module.scss";

const InputSearch = () => {
  return (
    <div className={styles.inputWrapper}>
      <input className={styles.input} placeholder="Search in Trumpf catalogue" />
      <button className={styles.buttonFilter}>filter svg</button>
    </div>
  );
};

export default InputSearch;
