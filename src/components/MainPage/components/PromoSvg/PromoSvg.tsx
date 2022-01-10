import React from "react";
import styles from "./PromoSvg.module.scss";
import combinedShape from "../../../../../public/assets/svg/combinedShape.svg";

const PromoSvg: React.FC = () => {
  return (
    <div className={styles.svgWrapper}>
      <img src={combinedShape.src} />
    </div>
  );
};

export default PromoSvg;
