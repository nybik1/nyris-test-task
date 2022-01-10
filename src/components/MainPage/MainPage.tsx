import React from "react";
import DragnDropZone from "./components/DragnDropZone/DragnDropZone";
import InputSearch from "./components/InputSearch/InputSearch";
import PromoSvg from "./components/PromoSvg/PromoSvg";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <>
      <div className="container">
        <PromoSvg />
        <InputSearch />
        <p className={styles.searchDescription}>Search by any name, category, SKU or keyword.</p>
      </div>
      <DragnDropZone />
    </>
  );
};

export default MainPage;
