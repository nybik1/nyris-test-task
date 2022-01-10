import Image from "next/image";
import React, { memo } from "react";
import styles from "./GridItem.module.scss";
import ZoomSVG from "../../../../assets/svg/itemZoom.svg";
import ThumbUpSVG from "../../../../assets/svg/thumbUp.svg";
import ThumbDownSVG from "../../../../assets/svg/thumbDown.svg";
import SupportSVG from "../../../../assets/svg/support.svg";
import ShareSVG from "../../../../assets/svg/itemShare.svg";

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
          <ZoomSVG />
        </div>
      </div>
      <div className={styles.info}>
        <p className={styles.sku}>SKU: {sku}</p>
        <p className={styles.title}>{title}</p>
        <div className={styles.bottom}>
          <div className={styles.rate}>
            <ThumbUpSVG />
            <ThumbDownSVG />
          </div>
          <div className={styles.actions}>
            <div className={styles.share}>
              <ShareSVG />
            </div>
            <div className={styles.comment}>
              <SupportSVG />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(GridItem);
