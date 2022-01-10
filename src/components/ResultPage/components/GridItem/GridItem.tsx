import Image from "next/image";
import React from "react";
import styles from "./GridItem.module.scss";
import zoomSVG from "../../../../../public/assets/svg/itemZoom.svg";
import thumbUpSVG from "../../../../../public/assets/svg/thumbUp.svg";
import thumbDownSVG from "../../../../../public/assets/svg/thumbDown.svg";
import supportSVG from "../../../../../public/assets/svg/support.svg";
import shareSVG from "../../../../../public/assets/svg/itemShare.svg";

type GridItemProps = {
  img: string;
  title: string;
  sku: string;
};

const GridItem: React.FC<GridItemProps> = ({ img, title, sku }) => {
  return (
    <div className={styles.item}>
      <div className={styles.imgWrapper}>
        <Image src={img} layout="fill" alt={title} />
        <div className={styles.imgZoom}>
          <img src={zoomSVG.src} />
        </div>
      </div>
      <div className={styles.info}>
        <p className={styles.sku}>SKU: {sku}</p>
        <p className={styles.title}>{title}</p>
        <div className={styles.bottom}>
          <div className={styles.rate}>
            <img src={thumbUpSVG.src} />
            <img src={thumbDownSVG.src} />
          </div>
          <div className={styles.actions}>
            <div className={styles.share}>
              <img src={shareSVG.src} />
            </div>
            <div className={styles.comment}>
              <img src={supportSVG.src} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
