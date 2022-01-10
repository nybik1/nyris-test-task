import React, { useState } from "react";
import styles from "./InputSearch.module.scss";
import { useRouter } from "next/router";

type InputSearchProps = {
  handleSearch: (arg0: string) => void;
};

const InputSearch: React.FC<InputSearchProps> = ({ handleSearch }) => {
  const router = useRouter();
  const [value, setValue] = useState<string>(router.query.name);

  return (
    <div className={styles.inputWrapper}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(value);
        }}
      >
        <input
          className={styles.input}
          placeholder="Search in Trumpf catalogue"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button type="button" className={styles.buttonShare} disabled={!value}>
          share svg
        </button>
        <button
          type="button"
          className={styles.buttonClear}
          onClick={() => {
            setValue("");
            handleSearch("");
          }}
        >
          X
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
