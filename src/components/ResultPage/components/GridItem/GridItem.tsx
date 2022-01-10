import Image from "next/image";
import React from "react";
import styles from "./GridItem.module.scss";

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
        <div className={styles.imgZoom}>zoom svg</div>
      </div>
      <div className={styles.info}>
        <p className={styles.sku}>SKU: {sku}</p>
        <p className={styles.title}>{title}</p>
        <div className={styles.bottom}>
          <div className={styles.rate}>
            <div>like</div>
            <div>dislike</div>
          </div>
          <div className={styles.actions}>
            <div className={styles.share}>share</div>
            <div className={styles.comment}>comment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
