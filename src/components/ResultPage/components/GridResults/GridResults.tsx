import React from "react";
import GridItem from "../GridItem/GridItem";
import styles from "./GridResults.module.scss";
import { GridResultsProps } from "./Types";
import ergonomicsSVG from "../../../../../public/assets/svg/ergonomics.svg";

const GridResults: React.FC<GridResultsProps> = ({ results }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {results.map(({ oid, images, title, sku }) => (
              <GridItem key={oid} img={images[0]} title={title} sku={sku} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.bottomBlock}>
        <div className={styles.countResults}>{results.length} items</div>
        <p className={styles.offerText}>
          Didn’t find what you were looking for? Share your search with our <a>product experts.</a>
        </p>
        <div className={styles.ergoSvg}>
          <img src={ergonomicsSVG.src} />
        </div>
      </div>
    </>
  );
};

export default GridResults;
